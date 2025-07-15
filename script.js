// Animación suave al hacer scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scroll = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    if (scroll > (sectionTop - windowHeight + sectionHeight/3)) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});

  window.addEventListener("DOMContentLoaded", () => {
    window.dispatchEvent(new Event('scroll'));
  });

  // Mostrar flecha cuando se hace scroll hacia abajo
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
