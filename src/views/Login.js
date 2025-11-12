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

  const btn = el.querySelector('#btnGoogle');
  const msg = el.querySelector('#msg');

  btn?.addEventListener('click', async () => {
    try {
      btn.disabled = true;
      btn.textContent = 'Abriendo Google…';
      msg.textContent = 'Redirigiendo a Google…';
      await signInWithGoogle();
    } catch (e) {
      btn.disabled = false;
      btn.textContent = 'Acceder con Google';
      msg.textContent = 'No se pudo abrir Google.';
      console.error('[GoogleSignInError]', e);
    }
  });

  handleRedirectResult()
    .then(() => {
      if (auth.currentUser) {
        msg.textContent = '¡Autenticado como ' + (auth.currentUser.email || auth.currentUser.uid) + '!';
        location.hash = '#/home';
      } else {
        
        msg.textContent = '';
      }
    })
    .catch(e => {
      console.error('[RedirectResultError]', e);
      msg.textContent = 'Error al regresar de Google.';
    });

  return el;
}
