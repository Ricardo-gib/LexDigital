// abogada-3.js

document.addEventListener('DOMContentLoaded', () => {
  // Abre el modal correspondiente cuando se hace clic
  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.setAttribute('aria-hidden', 'false');
    }
  };

  // Cierra el modal
  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.setAttribute('aria-hidden', 'true');
    }
  };

  // Vincula los botones de acción con los modales
  document.querySelector('[data-modal-target="modal-chat"]').addEventListener('click', () => openModal('modal-chat'));
  document.querySelector('[data-modal-target="modal-video"]').addEventListener('click', () => openModal('modal-video'));
  document.querySelector('[data-modal-target="modal-presencial"]').addEventListener('click', () => openModal('modal-presencial'));

  // Cierra los modales al hacer clic en el botón de cierre
  document.querySelectorAll('[data-modal-close]').forEach(button => {
    button.addEventListener('click', (e) => {
      const modalId = e.target.closest('.lex-modal').id;
      closeModal(modalId);
    });
  });

  // Cierra los modales si se hace clic fuera de ellos
  document.querySelectorAll('.lex-modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });

  // Cierra el modal con el Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.lex-modal[aria-hidden="false"]');
      if (openModal) {
        closeModal(openModal.id);
      }
    }
  });
});
