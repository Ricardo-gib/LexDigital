// src/main.js
function renderHome() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <section class="welcome-hero">
      <div class="hero-top">
        <img class="hero-logo" src="assets/icon_192.png" alt="LexDigital" width="104" height="104"/>
        <h1 class="brand">Lex<span class="accent">Digital</span></h1>
        <p class="tagline">Asesoría legal clara, rápida y confiable para tu día a día.</p>
      </div>

      <div class="hero-card">
        <a class="btn primary" id="btnEmail" href="#">Acceder con correo</a>
        <a class="btn" id="btnRegister" href="#">Registrarme</a>
        <a class="link-invite" id="linkInvite" href="#guest">Acceder como invitado</a>
      </div>
    </section>
  `;

  // Acciones de demo para que veas que responde
  document.getElementById('btnEmail')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Acceso con correo (pantalla en construcción)');
  });

  document.getElementById('btnRegister')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Registro (pantalla en construcción)');
  });

  document.getElementById('linkInvite')?.addEventListener('click', (e) => {
    // Aquí luego navegaremos a la vista Invitado
  });
}

// Monta la home
document.addEventListener('DOMContentLoaded', renderHome);
