// ========= Navegación por hash (para que el botón "Atrás" funcione) =========
const sections = document.querySelectorAll('.section');

function showSection(id){
  sections.forEach(s => s.classList.toggle('active', s.id === id));
  if (location.hash.replace('#','') !== id) location.hash = id;
}

window.addEventListener('load', ()=>{
  const first = location.hash?.replace('#','') || 'acceso';
  if (document.getElementById(first)) showSection(first); else showSection('acceso');
});

window.addEventListener('hashchange', ()=>{
  const id = location.hash?.replace('#','') || 'acceso';
  if (document.getElementById(id)) showSection(id);
});

// ========= Acceso → Menú =========
document.getElementById('btn-login')?.addEventListener('click', ()=> showSection('menu'));
document.getElementById('btn-register')?.addEventListener('click', ()=> showSection('menu'));
document.getElementById('btn-guest')?.addEventListener('click', ()=> showSection('menu'));

// ========= Enlaces del Menú principal =========
document.querySelectorAll('[data-goto]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = a.getAttribute('data-goto');
    showSection(id);
  });
});

// ========= Consultas: respuesta simulada + WhatsApp =========
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
});

document.getElementById('btn-whatsapp')?.addEventListener('click', ()=>{
  const phone = document.querySelector('#telefono').value.trim();
  const msg = document.querySelector('#mensaje').value.trim();
  if(!phone || !msg){
    alert('Completa teléfono y consulta.');
    return;
  }
  const url = `https://wa.me/${phone.replace(/[^0-9]/g,'')}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});
