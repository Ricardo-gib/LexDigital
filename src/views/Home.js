export default function Home() {
  const el = document.createElement('section');
  el.className = 'welcome-hero';

  el.innerHTML = `
    <header class="hero-top">
      <div class="hero-logo"
           style="background-image:url('assets/icon_512.png?v=23')"
           role="img" aria-label="LexDigital"></div>
      <h1 class="brand"><span class="lex">Lex</span><span class="accent">Digital</span></h1>
      <p class="tagline">Asesoría legal al instante, confiable y a tu alcance.</p>
    </header>

    <div class="hero-card">
      <button class="btn primary" id="btnLogin">Acceder con ID</button>
      <button class="btn" id="btnRegister">Registrarme</button>
      <a href="#/abogadolex" class="link">Acceder como invitado</a>
    </div>
  `;

  const btnLogin = el.querySelector('#btnLogin');
  const btnRegister = el.querySelector('#btnRegister');

  btnLogin.addEventListener('click', () => {
    location.hash = '#/login';
  });

  btnRegister.addEventListener('click', () => {
    location.hash = '#/register';
  });

  return el;
}
