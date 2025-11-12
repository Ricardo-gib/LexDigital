document.addEventListener('DOMContentLoaded', () => {
  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.setAttribute('aria-hidden', 'false');
    }
  };

  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.setAttribute('aria-hidden', 'true');
    }
  };

  document.querySelector('[data-modal-target="modal-chat"]').addEventListener('click', () => openModal('modal-chat'));
  document.querySelector('[data-modal-target="modal-video"]').addEventListener('click', () => openModal('modal-video'));
  document.querySelector('[data-modal-target="modal-presencial"]').addEventListener('click', () => openModal('modal-presencial'));

  document.querySelectorAll('[data-modal-close]').forEach(button => {
    button.addEventListener('click', (e) => {
      const modalId = e.target.closest('.lex-modal').id;
      closeModal(modalId);
    });
  });
  
  document.querySelectorAll('.lex-modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.lex-modal[aria-hidden="false"]');
      if (openModal) {
        closeModal(openModal.id);
      }
    }
  });
});
