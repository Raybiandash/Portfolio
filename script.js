const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const year = document.getElementById('year');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const galleryGrid = document.getElementById('galleryGrid');
const closeModal = document.getElementById('closeModal');

year.textContent = new Date().getFullYear();

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

const projects = {
  talent45: {
    title: 'Talent45 Hiring Campaigns',
    description: 'A collection of recruitment marketing creatives designed for clear communication, applicant response, and social media visibility.',
    images: [
      'TALENT45-HEAD-OF-SALES.png',
      'Talent452.png',
      'Talent451.png',
      'Talent45.png',
      'untitled-design.png',
      'HIRING!1.png',
      'We-are1.png',
      'We-are2.png',
      'Growth-Associate1.png',
      'Growth-Associate2.png',
      'We-are3.png',
      'HIRING!.png',
    ]
  },
  codar: {
    title: 'Codar Tech Africa Campaigns',
    description: 'Educational technology campaign visuals created for course promotion, tech learning awareness, and brand-aligned digital communication.',
    images: [
      'Become.png',
      'Codar-design5.png',
      'Codar-design4.png',
      'Codar-design3.png',
      'Codar-design2.png',
      'Codar-design1.png',
      'Codar-design6.png',
      'Codar-design.png',
      'Fuel-price-design.png',
      'LEARN.png',
      'caro1.png',
      'caro2.png',
      'caro3.png',
      'caro4.png',
      'caro5.png',
    ]
  },
  edmigo: {
    title: 'Edmigo Social Creatives',
    description: 'Brand-focused social media visuals using simple contrast, clear typography, and motivational campaign direction.',
    images: [
      '30%-discount.png',
      'Edmigo-post-design.png',
      'Edmingo.png',
      'Edmingo1.png',
      'Edmingo2.png',
      'Edmingo3.png',
      'Edmingo4.png',
      'Edmingo5.png',
      'Edmingo6.png',
      'Edmingo7.png',
      'Fuel.png',
      'Untitled-design1.png',
    ]
  }
};

function openProject(projectKey) {
  const project = projects[projectKey];
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  galleryGrid.innerHTML = '';

  project.images.forEach((imagePath, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = `${project.title} design ${index + 1}`;
    img.onerror = () => {
      item.innerHTML = `Replace with ${project.title}<br>Design ${index + 1}`;
    };

    item.appendChild(img);
    galleryGrid.appendChild(item);
  });

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
});

closeModal.addEventListener('click', closeProject);

modal.addEventListener('click', event => {
  if (event.target === modal) closeProject();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeProject();
});

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.14 });

revealElements.forEach(element => observer.observe(element));
