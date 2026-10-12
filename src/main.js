import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Configuração dinâmica do WhatsApp via variável de ambiente
  const rawPhone = import.meta.env.VITE_WHATSAPP_PHONE || '';
  const cleanPhone = String(rawPhone).replace(/\D/g, '');

  const getWhatsappUrl = (customText) => {
    const defaultText = 'Olá! Gostaria de solicitar um orçamento com a Laço & Papel';
    const message = encodeURIComponent(customText || defaultText);
    return cleanPhone 
      ? `https://wa.me/${cleanPhone}?text=${message}`
      : `https://wa.me/?text=${message}`;
  };

  // Atualiza todos os links do WhatsApp
  document.querySelectorAll('a[href^="https://wa.me"]').forEach((link) => {
    const context = link.getAttribute('data-product');
    const customMessage = context 
      ? `Olá! Gostaria de solicitar um orçamento para ${context} com a Laço & Papel`
      : null;
    link.href = getWhatsappUrl(customMessage);
  });

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
