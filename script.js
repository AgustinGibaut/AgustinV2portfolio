 document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', e => {
      e.currentTarget.classList.add('show-tooltip');
      setTimeout(() => {
        e.currentTarget.classList.remove('show-tooltip');
      }, 1500); // Oculta el tooltip después de 1.5 segundos
    });
  });