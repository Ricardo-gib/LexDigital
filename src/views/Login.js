import { loginUser, getCurrentUser } from '../lib/localAuth.js';

export default function Login(){
  const el = document.createElement('section');
  el.className = 'container';
  el.innerHTML = `
    <div style="flex:1;display:grid;place-items:center">
      <div class="card" style="max-width:520px;width:100%;text-align:left">
        <h1>Identificación</h1>
        <p class="muted">Ingresa con tu ID y contraseña</p>

        <form id="frmLogin" class="grid" style="gap:12px;margin-top:8px">
          <label>ID de usuario
            <input type="text" id="userId" class="input" placeholder="Ejemplo: Mari123" required />
          </label>
          <label>Contraseña
            <input type="password" id="password" class="input" placeholder="Tu contraseña" required />
          </label>
          <label style="display:flex;align-items:center;gap:8px;margin-top:4px">
            <input type="checkbox" id="remember" />
            <span>Recordar mis datos</span>
          </label>
          <button type="submit" class="btn primary" id="btnLogin">Ingresar</button>
        </form>

        <button class="btn" id="btnForgot" style="margin-top:8px">Olvidé mi contraseña</button>
        <a href="#/register" class="link" style="margin-top:8px;display:inline-block">Crear nueva cuenta</a>
        <a href="#/home?guest=1" class="link" style="margin-top:4px;display:inline-block">Entrar como invitado</a>

        <p class="muted" id="msg" style="margin-top:8px"></p>
      </div>
    </div>

    <div id="modalReset" style="
      position:fixed;inset:0;display:none;align-items:center;justify-content:center;
      background:rgba(0,0,0,0.45);z-index:1000;
    ">
      <div style="background:#fff;border-radius:16px;padding:20px;max-width:420px;width:90%;
                  box-shadow:0 12px 30px rgba(0,0,0,0.25)">
        <h2 style="margin-top:0">Recuperar contraseña</h2>
        <p class="muted" id="resetStepText">
          Paso 1: Ingresa tu ID y correo para enviar un código de verificación.
        </p>

        <div id="resetStep1" class="grid" style="gap:8px;margin-top:8px">
          <label>ID de usuario
            <input type="text" id="resetId" class="input" />
          </label>
          <label>Correo electrónico
            <input type="email" id="resetEmail" class="input" />
          </label>
          <button class="btn primary" id="btnSendCode">Enviar código</button>
        </div>

        <div id="resetStep2" class="grid" style="gap:8px;margin-top:8px;display:none">
          <p class="muted" id="codeInfo"></p>
          <label>Código de verificación
            <input type="text" id="resetCode" class="input" />
          </label>
          <label>Nueva contraseña
            <input type="password" id="newPassword" class="input" placeholder="Mínimo 6 caracteres" />
          </label>
          <button class="btn primary" id="btnChangePass">Cambiar contraseña</button>
        </div>

        <p class="muted" id="resetMsg" style="margin-top:8px"></p>
        <button class="btn" id="btnCloseReset" style="margin-top:8px;width:100%">Cerrar</button>
      </div>
    </div>
  `;

  const frmLogin = el.querySelector('#frmLogin');
  const msg = el.querySelector('#msg');
  const btnLogin = el.querySelector('#btnLogin');

  const modalReset = el.querySelector('#modalReset');
  const btnForgot = el.querySelector('#btnForgot');
  const btnCloseReset = el.querySelector('#btnCloseReset');
  const btnSendCode = el.querySelector('#btnSendCode');
  const btnChangePass = el.querySelector('#btnChangePass');
  const resetMsg = el.querySelector('#resetMsg');
  const resetStepText = el.querySelector('#resetStepText');
  const resetStep1 = el.querySelector('#resetStep1');
  const resetStep2 = el.querySelector('#resetStep2');
  const codeInfo = el.querySelector('#codeInfo');

  let currentReset = null; // { id, code, expires }

  // Si hay usuario recordado, lo mostramos
  const remembered = localStorage.getItem('lex_last_id');
  if (remembered) {
    el.querySelector('#userId').value = remembered;
    el.querySelector('#remember').checked = true;
  }

  frmLogin.addEventListener('submit', (ev) => {
    ev.preventDefault();
    msg.textContent = '';
    btnLogin.disabled = true;
    btnLogin.textContent = 'Ingresando...';

    const id = el.querySelector('#userId').value.trim();
    const password = el.querySelector('#password').value;
    const remember = el.querySelector('#remember').checked;

    try {
      const user = loginUser(id, password);
      if (remember) {
        localStorage.setItem('lex_last_id', id);
      } else {
        localStorage.removeItem('lex_last_id');
      }
      msg.textContent = 'Bienvenido, ' + (user.name || user.id) + '.';
      location.hash = '#/home';
    } catch (err) {
      console.error(err);
      msg.textContent = err?.message || 'No se pudo iniciar sesión.';
    } finally {
      btnLogin.disabled = false;
      btnLogin.textContent = 'Ingresar';
    }
  });

  // Flujo de recuperación
  btnForgot.addEventListener('click', () => {
    resetMsg.textContent = '';
    resetStep1.style.display = 'grid';
    resetStep2.style.display = 'none';
    resetStepText.textContent =
      'Paso 1: Ingresa tu ID y correo para enviar un código de verificación.';
    modalReset.style.display = 'flex';
  });

  btnCloseReset.addEventListener('click', () => {
    modalReset.style.display = 'none';
  });

  btnSendCode.addEventListener('click', () => {
    resetMsg.textContent = '';
    const id = el.querySelector('#resetId').value.trim();
    const email = el.querySelector('#resetEmail').value.trim();

    try {
      const usersRaw = localStorage.getItem('lex_users');
      const users = usersRaw ? JSON.parse(usersRaw) : {};
      const user = users[id];
      if (!user) {
        resetMsg.textContent = 'No existe una cuenta con ese ID.';
        return;
      }
      if (user.email && email && user.email !== email) {
        resetMsg.textContent = 'El correo no coincide con el registrado.';
        return;
      }

      const code = String(Math.floor(100000 + Math.random() * 900000));
      const expires = Date.now() + 10 * 60 * 1000; // 10 minutos
      currentReset = { id, code, expires };

      codeInfo.textContent =
        'Código generado (simulación): ' + code + '. Ingrésalo a continuación para cambiar tu contraseña.';
      resetStep1.style.display = 'none';
      resetStep2.style.display = 'grid';
      resetStepText.textContent = 'Paso 2: Ingresa el código y tu nueva contraseña.';
      resetMsg.textContent =
        'Hemos simulado el envío de un código de verificación. Úsalo para completar el cambio.';
    } catch (e) {
      console.error(e);
      resetMsg.textContent = 'Ocurrió un error al generar el código.';
    }
  });

  btnChangePass.addEventListener('click', () => {
    resetMsg.textContent = '';
    if (!currentReset) {
      resetMsg.textContent = 'Primero genera un código.';
      return;
    }
    if (Date.now() > currentReset.expires) {
      resetMsg.textContent = 'El código ha expirado. Vuelve a generarlo.';
      return;
    }

    const codeInput = el.querySelector('#resetCode').value.trim();
    const newPassword = el.querySelector('#newPassword').value;

    if (codeInput !== currentReset.code) {
      resetMsg.textContent = 'El código ingresado no es correcto.';
      return;
    }
    if (!newPassword || newPassword.length < 6) {
      resetMsg.textContent = 'La nueva contraseña debe tener al menos 6 caracteres.';
      return;
    }

    try {
      const usersRaw = localStorage.getItem('lex_users');
      const users = usersRaw ? JSON.parse(usersRaw) : {};
      const user = users[currentReset.id];
      if (!user) {
        resetMsg.textContent = 'No se encontró el usuario.';
        return;
      }
      user.password = newPassword;
      users[currentReset.id] = user;
      localStorage.setItem('lex_users', JSON.stringify(users));
      resetMsg.textContent = 'Contraseña actualizada correctamente. Ahora puedes iniciar sesión.';
    } catch (e) {
      console.error(e);
      resetMsg.textContent = 'No se pudo actualizar la contraseña.';
    }
  });

  return el;
}
