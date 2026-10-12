import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Accordion exclusivo
  const detailsList = document.querySelectorAll('details');
  detailsList.forEach((el) => {
    el.addEventListener('toggle', () => {
      if (el.open) {
        detailsList.forEach((other) => {
          if (other !== el && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });

  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
