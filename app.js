// ======= Navegación por secciones =======
const sections = document.querySelectorAll('.section');
const tabs = document.querySelectorAll('.tab');
const tabbar = document.getElementById('tabbar');

function showSection(id){
  sections.forEach(s => s.classList.toggle('active', s.id === id));
  tabs.forEach(t => t.classList.toggle('active', t.dataset.target === id));
  location.hash = id;
}

// Si ya “inició sesión” antes, ir a Inicio; si no, mostrar Acceso
window.addEventListener('load', ()=>{
  const auth = localStorage.getItem('lex_auth'); // 'guest' o 'user'
  if (auth) {
    tabbar.style.display = 'grid';
    showSection('inicio');
  } else {
    tabbar.style.display = 'none';
    showSection('acceso');
  }
});

// Tabs
tabs.forEach(t => t.addEventListener('click', (e)=>{
  e.preventDefault();
  showSection(t.dataset.target);
}));

// ======= Acceso: Invitado y Registro (demo) =======
const btnInvitado = document.getElementById('btn-invitado');
btnInvitado?.addEventListener('click', ()=>{
  localStorage.setItem('lex_auth', 'guest');
  tabbar.style.display = 'grid';
  showSection('inicio');
});

const formRegistro = document.getElementById('form-registro');
formRegistro?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const formData = new FormData(formRegistro);
  const nombre = (formData.get('nombre') || '').toString().trim();
  const correo = (formData.get('correo') || '').toString().trim();
  const pass   = (formData.get('pass')   || '').toString().trim();

  // Validación mínima (demo)
  if (!nombre || !correo || !pass) {
    alert('Completa nombre, correo y contraseña (demo).');
    return;
  }
  // Guardamos “sesión” de demo
  localStorage.setItem('lex_auth', 'user');
  localStorage.setItem('lex_user_name', nombre);
  tabbar.style.display = 'grid';
  showSection('inicio');
  alert('¡Registro exitoso (demo)!');
});

// ======= Consultas (respuesta simulada + WhatsApp) =======
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
    'Civil': 'Revisar contrato, evidencias y carta notarial.',
    'Penal': 'No declarar sin abogado; preservar pruebas.',
    'Empresarial': 'Tipo societario, minuta y trámites SUNARP/SUNAT.'
  };
  out.innerHTML = `📌 <b>Área:</b> ${area}<br><br>${base[area]}<br><br><small>Respuesta simulada del prototipo.</small>`;
});

const wbtn = document.querySelector('#btn-whatsapp');
wbtn?.addEventListener('click', ()=>{
  const phone = document.querySelector('#telefono').value.trim();
  const msg = document.querySelector('#mensaje').value.trim();
  if(!phone || !msg){
    alert('Completa teléfono y consulta.');
    return;
  }
  const url = `https://wa.me/${phone.replace(/[^0-9]/g,'')}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});
