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

  // Botón Google
  el.querySelector('#btnGoogle')?.addEventListener('click', () => {
    signInWithGoogle();
  });

  // Si el redirect volvió desde Google, aquí se resuelve
  handleRedirectResult().then(() => {
    if (auth.currentUser) {
      location.hash = '#/home';  // ojo: con slash
    }
  });

  return el;
}
