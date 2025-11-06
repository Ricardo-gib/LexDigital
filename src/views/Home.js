export default function Home({ V = '26' } = {}) {
  const el = document.createElement('section');
  el.className = 'welcome-hero';

  el.innerHTML = `
    <header class="hero-top">
      <div
        class="hero-logo"
        style="background-image:url('assets/icon_512.png?v=${V}')"
        role="img" aria-label="LexDigital"
      ></div>

      <h1 class="brand">
        <span class="lex">Lex</span><span class="accent">Digital</span>
      </h1>

      <p class="tagline">Asesoría legal al instante, confiable y a tu alcance.</p>
    </header>

    <div class="hero-card">
      <a class="btn primary" href="#login">Acceder con correo</a>
      <a class="btn" href="#signup">Registrarme</a>
      <a class="link-invite" href="#home?guest=1">Acceder como invitado</a>
    </div>
  `;
  return el;
}
