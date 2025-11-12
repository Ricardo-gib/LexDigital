import { registerWithEmail, loginWithEmail, auth } from '../lib/firebase.js';

export default function Register(){
  const el = document.createElement('section');
  el.className = 'container';
  el.innerHTML = `
    <div style="flex:1;display:grid;place-items:center">
      <div class="card" style="max-width:520px;width:100%;text-align:left">
        <h1>Crear cuenta</h1>
        <p class="muted">Completa tus datos para registrarte</p>

        <form id="frm" class="grid" style="gap:12px;margin-top:8px">
          <label>Nombre completo
            <input type="text" id="name" class="input" placeholder="Tu nombre" required />
          </label>
          <label>Edad
            <input type="number" id="age" class="input" min="0" max="120" placeholder="18" />
          </label>
          <label>Correo
            <input type="email" id="email" class="input" placeholder="tucorreo@gmail.com" required />
          </label>
          <label>Contraseña
            <input type="password" id="pass" class="input" placeholder="Mínimo 6 caracteres" required />
          </label>

          <button class="btn primary" type="submit" id="btnCreate">Crear cuenta</button>
          <button class="btn" type="button" id="btnLogin">Ya tengo cuenta: Ingresar</button>
          <a class="link-invite" href="#/home">Volver</a>

          <p class="muted" id="msg"></p>
        </form>
      </div>
    </div>
  `;

  const f = el.querySelector('#frm');
  const msg = el.querySelector('#msg');
  const btnCreate = el.querySelector('#btnCreate');
  const btnLogin  = el.querySelector('#btnLogin');

  f.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name  = el.querySelector('#name').value.trim();
    const age   = el.querySelector('#age').value.trim();
    const email = el.querySelector('#email').value.trim();
    const pass  = el.querySelector('#pass').value;

    btnCreate.disabled = true;
    btnCreate.textContent = 'Creando…';
    msg.textContent = 'Registrando y enviando verificación…';

    try {
      const user = await registerWithEmail({ name, age, email, password: pass });
      msg.textContent = `Cuenta creada. Te enviamos un correo de verificación a ${user.email}.`;

      location.hash = '#/home';
    } catch (err) {
      console.error(err);
      msg.textContent = 'No se pudo crear la cuenta: ' + (err?.message || err);
    } finally {
      btnCreate.disabled = false;
      btnCreate.textContent = 'Crear cuenta';
    }
  });

  btnLogin.addEventListener('click', async () => {
    const email = el.querySelector('#email').value.trim();
    const pass  = el.querySelector('#pass').value;
    if (!email || !pass){ msg.textContent = 'Completa correo y contraseña.'; return; }

    btnLogin.disabled = true;
    btnLogin.textContent = 'Ingresando…';
    msg.textContent = 'Validando credenciales…';

    try {
      await loginWithEmail(email, pass);
      location.hash = '#/home';
    } catch (err) {
      console.error(err);
      msg.textContent = 'No se pudo iniciar sesión: ' + (err?.message || err);
    } finally {
      btnLogin.disabled = false;
      btnLogin.textContent = 'Ya tengo cuenta: Ingresar';
    }
  });

  return el;
}
