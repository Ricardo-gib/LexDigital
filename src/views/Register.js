import { registerUser } from '../lib/localAuth.js';

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
          <label>ID de usuario
            <input type="text" id="userId" class="input" placeholder="Ejemplo: Mari123" minlength="3" required />
          </label>
          <label>Contraseña
            <input type="password" id="password" class="input" placeholder="Mínimo 6 caracteres" minlength="6" required />
          </label>
          <label>Número de celular
            <input type="tel" id="phone" class="input" placeholder="Tu número de contacto" />
          </label>
          <label>Correo electrónico
            <input type="email" id="email" class="input" placeholder="tucorreo@gmail.com" />
          </label>

          <button type="submit" class="btn primary" id="btnCreate">Crear cuenta</button>
        </form>

        <button class="btn" id="btnLogin" style="margin-top:8px">Ya tengo cuenta: Ingresar</button>
        <a href="#/home" class="link" style="margin-top:8px;display:inline-block">Volver</a>

        <p class="muted" id="msg" style="margin-top:8px"></p>
      </div>
    </div>
  `;

  const frm = el.querySelector('#frm');
  const msg = el.querySelector('#msg');
  const btnCreate = el.querySelector('#btnCreate');
  const btnLogin = el.querySelector('#btnLogin');

  btnLogin.addEventListener('click', () => {
    location.hash = '#/login';
  });

  frm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    msg.textContent = '';
    btnCreate.disabled = true;
    btnCreate.textContent = 'Creando cuenta...';

    const name = el.querySelector('#name').value.trim();
    const id = el.querySelector('#userId').value.trim();
    const password = el.querySelector('#password').value;
    const phone = el.querySelector('#phone').value.trim();
    const email = el.querySelector('#email').value.trim();

    try {
      registerUser({ id, name, password, phone, email });
      msg.textContent = 'Cuenta creada correctamente. Ya puedes ingresar con tu ID y contraseña.';
      frm.reset();
    } catch (err) {
      console.error(err);
      msg.textContent = err?.message || 'No se pudo crear la cuenta.';
    } finally {
      btnCreate.disabled = false;
      btnCreate.textContent = 'Crear cuenta';
    }
  });

  return el;
}
