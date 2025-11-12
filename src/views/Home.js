import { signInWithGoogle, handleRedirectResult, auth } from '../lib/firebase.js';

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
      <button class="btn primary" type="button" id="googleNow">Acceder con correo</button>
      <a class="btn" href="#/register">Registrarme</a>
      <a class="link-invite" href="#/abogadolex">Acceder como invitado</a>
      <p class="muted" id="msg" style="margin-top:8px"></p>
    </div>
  `;

  const btn = el.querySelector('#googleNow');
  const msg = el.querySelector('#msg');

  btn?.addEventListener('click', async () => {
    try {
      btn.disabled = true;
      btn.textContent = 'Abriendo Google…';
      msg.textContent = 'Redirigiendo a Google…';
      await signInWithGoogle(); 
    } catch (e) {
      console.error('[GoogleSignIn]', e);
      btn.disabled = false;
      btn.textContent = 'Acceder con correo';
      msg.textContent = 'No se pudo abrir Google.';
    }
  });

  handleRedirectResult().then(() => {
    if (auth.currentUser) {
      location.hash = '#/home';
    }
  });

  return el;
}
