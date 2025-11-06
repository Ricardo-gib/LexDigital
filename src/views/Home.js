export default function Home() {
  const el = document.createElement('section');
  el.className = 'welcome-hero';

  // 👇 OBLIGATORIO: template string con backticks `
  el.innerHTML = `
    <header class="hero-top">
      <div
        class="hero-logo"
        style="background-image:url('assets/icon_512.png?v=23')"
        role="img" aria-label="LexDigital"
      ></div>

      <h1 class="brand">
        <span class="lex">Lex</span><span class="accent">Digital</span>
      </h1>

      <p class="tagline">Asesoría legal al instante, confiable y a tu alcance.</p>
    </header>

    <div class="hero-card">
      <a class="btn primary" id="goLogin" href="#/login">Acceder con correo</a>
      <a class="btn" href="#/register">Registrarme</a>
      <a class="link-invite" href="#/home?guest=1">Acceder como invitado</a>
    </div>
  `;

  // Forzar navegación por si algún handler bloquea los <a>
  el.querySelector('#goLogin')?.addEventListener('click', (e) => {
    e.preventDefault();
    location.hash = '#/login';
  });

  // Smoke test (para verificar que cargó este archivo nuevo)
  console.log('HOME v31 listo');

  return el;
}
