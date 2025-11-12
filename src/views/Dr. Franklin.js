export default function Franklin() {
  const el = document.createElement('section');
  el.className = 'screen full-screen';
  el.innerHTML = `
    <h1>Dr. Franklin Vicente</h1>
    <p>Especialidad: Penal</p>

    <div class="actions" style="margin-top:20px;">
      <button class="btn primary" data-modal-target="modal-chat">Chat</button>
      <button class="btn" data-modal-target="modal-video">Videollamada</button>
      <button class="btn" data-modal-target="modal-presencial">Cita presencial</button>
    </div>

    <div id="modal-chat" class="lex-modal" aria-hidden="true">
      <div class="lex-modal__content">
        <h2>Chat con el Dr. Franklin</h2>
        <p>Iniciando chat...</p>
        <button data-modal-close>Cerrar</button>
      </div>
    </div>

    <div id="modal-video" class="lex-modal" aria-hidden="true">
      <div class="lex-modal__content">
        <h2>Videollamada</h2>
        <p>Conectando con el Dr. Franklin...</p>
        <button data-modal-close>Cerrar</button>
      </div>
    </div>

    <div id="modal-presencial" class="lex-modal" aria-hidden="true">
      <div class="lex-modal__content">
        <h2>Cita presencial</h2>
        <p>Por favor, coordina tu cita en recepción.</p>
        <button data-modal-close>Cerrar</button>
      </div>
    </div>
  `;

  const openModal = (modalId) => {
    const modal = el.querySelector(`#${modalId}`);
    if (modal) modal.setAttribute('aria-hidden', 'false');
  };

  const closeModal = (modalId) => {
    const modal = el.querySelector(`#${modalId}`);
    if (modal) modal.setAttribute('aria-hidden', 'true');
  };

  el.querySelectorAll('[data-modal-target]').forEach(button => {
    button.addEventListener('click', (e) => {
      const target = e.target.getAttribute('data-modal-target');
      openModal(target);
    });
  });

  el.querySelectorAll('[data-modal-close]').forEach(button => {
    button.addEventListener('click', (e) => {
      const modal = e.target.closest('.lex-modal');
      closeModal(modal.id);
    });
  });

  el.querySelectorAll('.lex-modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = el.querySelector('.lex-modal[aria-hidden="false"]');
      if (modal) closeModal(modal.id);
    }
  });

  return el;
}


