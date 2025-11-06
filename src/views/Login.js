// src/views/Login.js
import { signInWithGoogle, handleRedirectResult, auth } from '../lib/firebase.js';

export default function Login(){
  const el = document.createElement('section');
  el.className = 'container';
  el.innerHTML = `
    <div style="flex:1;display:grid;place-items:center">
      <div class="card" style="max-width:520px;width:100%;text-align:center">
        <h1>Acceso</h1>
        <p class="muted">Elige tu método de acceso</p>
        <div class="grid">
          <button class="btn primary" id="btnGoogle">Acceder con Google</button>
          <a class="btn" href="#/register">Registrarme con correo</a>
          <a class="btn" href="#/home?guest=1">Entrar como invitado</a>
        </div>
        <p class="muted" id="msg" style="margin-top:8px"></p>
      </div>
    </div>
  `;

  const msg = el.querySelector('#msg');

  el.querySelector('#btnGoogle')?.addEventListener('click', async () => {
    msg.textContent = 'Redirigiendo a Google…';
    try {
      await signInWithGoogle(); // abre selector (redirect)
    } catch (e) {
      console.error('[GoogleSignInError]', e);
      msg.textContent = 'No se pudo abrir Google: ' + (e?.message || e);
    }
  });

  handleRedirectResult().then((res) => {
    // res puede venir null si no es retorno de Google
    if (auth.currentUser) {
      msg.textContent = '¡Autenticado como ' + (auth.currentUser.email || auth.currentUser.uid) + '!';
      location.hash = '#/home';
    } else if (res === null) {
      // primera carga normal, sin retorno de Google
      msg.textContent = '';
    }
  }).catch(e => {
    console.error('[RedirectResultError]', e);
    msg.textContent = 'Error al regresar de Google: ' + (e?.message || e);
  });

  console.log('[LOGIN] vista montada');
  return el;
}

