// ===== Utilidades UI =====
const sections = document.querySelectorAll('.section');
const tabs = document.querySelectorAll('.tab');
const tabbar = document.getElementById('tabbar');
const topbar = document.getElementById('topbar');
const helloEl = document.getElementById('hello');
const toastEl = document.getElementById('toast');

function showSection(id){
  sections.forEach(s => s.classList.toggle('active', s.id === id));
  tabs.forEach(t => t.classList.toggle('active', t.dataset.target === id));
  if (id === 'acceso') { tabbar.style.display = 'none'; topbar.style.display = 'none'; }
  location.hash = id;
}

function toast(msg){
  if(!toastEl) return;
  toastEl.textContent = msg;
  toastEl.style.display = 'block';
  setTimeout(()=> toastEl.style.display = 'none', 1800);
}

function setHello(name, mode){
  const who = name ? name : 'invitado';
  helloEl.textContent = `Hola, ${who}${mode === 'guest' ? ' (invitado)' : ''}`;
}

// ===== Estado de sesión (demo) =====
window.addEventListener('load', ()=>{
  const auth = localStorage.getItem('lex_auth'); // 'guest' | 'user'
  const name = localStorage.getItem('lex_user_name') || '';
  if (auth) {
    setHello(name, auth);
    tabbar.style.display = 'grid';
    topbar.style.display = 'flex';
    showSection('inicio');
  } else {
    showSection('acceso');
  }
});

// Tabs
tabs.forEach(t => t.addEventListener('click', (e)=>{
  e.preventDefault();
  showSection(t.dataset.target);
}));

// ===== Acceso =====
document.getElementById('btn-invitado')?.addEventListener('click', ()=>{
  localStorage.setItem('lex_auth', 'guest');
  localStorage.removeItem('lex_user_name');
  setHello('', 'guest');
  tabbar.style.display = 'grid';
  topbar.style.display = 'flex';
  showSection('inicio');
  toast('Entraste como invitado');
});

document.getElementById('form-registro')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const fd = new FormData(e.target);
  const nombre = (fd.get('nombre') || '').toString().trim();
  const correo = (fd.get('correo') || '').toString().trim();
  const pass   = (fd.get('pass')   || '').toString().trim();

  if (!nombre || !correo || !pass) {
    toast('Completa nombre, correo y contraseña');
    return;
  }
  localStorage.setItem('lex_auth', 'user');
  localStorage.setItem('lex_user_name', nombre);
  setHello(nombre, 'user');
  tabbar.style.display = 'grid';
  topbar.style.display = 'flex';
  showSection('inicio');
  toast('Registro exitoso (demo)');
});

// Cerrar sesión
document.getElementById('btn-logout')?.addEventListener('click', ()=>{
  localStorage.removeItem('lex_auth');
  localStorage.removeItem('lex_user_name');
  showSection('acceso');
  toast('Sesión cerrada');
});

// ===== Consultas (respuesta simulada + WhatsApp) =====
const form = document.querySelector('#consulta-form');
const out = document.querySelector('#respuesta');

form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const area = form.area.value;
  const mensaje = form.mensaje.value.trim();
  if(!mensaje){
    out.textContent = 'Escribe tu consulta.';
    return;
  }
  const base = {
    'Laboral': 'Pago de beneficios y evaluación de despido arbitrario.',
    'Civil': 'Revisión de contrato, evidencias y carta notarial.',
    'Penal': 'No declarar sin abogado; preservar pruebas.',
    'Empresarial': 'Tipo societario, minuta y trámites SUNARP/SUNAT.'
  };
  out.innerHTML = `📌 <b>Área:</b> ${area}<br><br>${base[area]}<br><br><small>Respuesta simulada del prototipo.</small>`;
  toast('Respuesta generada');
});

document.getElementById('btn-whatsapp')?.addEventListener('click', ()=>{
  const phone = document.querySelector('#telefono').value.trim();
  const msg = document.querySelector('#mensaje').value.trim();
  if(!phone || !msg){
    toast('Completa teléfono y consulta');
    return;
  }
  const url = `https://wa.me/${phone.replace(/[^0-9]/g,'')}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});
