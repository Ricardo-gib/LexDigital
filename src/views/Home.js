export default function Home() {
  const el = document.createElement('section');
  el.className = 'welcome-hero';

  el.innerHTML = `
    <header class="hero-top">
      <img
        class="hero-logo"
        src="assets/icon_512.png?v=17"
        alt="LexDigital"
        width="180" height="180"
        loading="eager"
      />
      <h1 class="brand">
        <span class="strong">Lex</span><span class="accent">Digital</span>
      </h1>
      <p class="tagline">Asesoría legal clara, rápida y confiable para tu día a día.</p>
    </header>

    <div class="hero-card">
      <a class="btn primary" href="#login">Acceder con correo</a>
      <a class="btn" href="#signup">Registrarme</a>
      <a class="link-invite" href="#home?guest=1">Acceder como invitado</a>
    </div>
  `;

  return el;
}
