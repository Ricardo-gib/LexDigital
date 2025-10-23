
const sections = document.querySelectorAll('.section');
const tabs = document.querySelectorAll('.tab');
function showSection(id){sections.forEach(s=>s.classList.toggle('active', s.id===id));tabs.forEach(t=>t.classList.toggle('active', t.dataset.target===id));location.hash=id;}
tabs.forEach(t=>t.addEventListener('click',e=>{e.preventDefault();showSection(t.dataset.target);}));
window.addEventListener('load',()=>{showSection(location.hash?.replace('#','')||'inicio');});

const form = document.querySelector('#consulta-form'); const out = document.querySelector('#respuesta');
form?.addEventListener('submit', e=>{e.preventDefault(); const area=form.area.value; const mensaje=form.mensaje.value.trim(); if(!mensaje){out.textContent='Escribe tu consulta.';return;}
const base={Laboral:'Pago de beneficios y evaluación de despido arbitrario.',Civil:'Revisar contrato, evidencias y carta notarial.',Penal:'No declarar sin abogado; preservar pruebas.',Empresarial:'Tipo societario, minuta y trámites ante SUNARP/SUNAT.'};
out.innerHTML=`📌 <b>Área:</b> ${area}<br><br>${base[area]}<br><br><small>Respuesta simulada del prototipo.</small>`;});
const wbtn=document.querySelector('#btn-whatsapp'); wbtn?.addEventListener('click',()=>{const phone=document.querySelector('#telefono').value.trim(); const msg=document.querySelector('#mensaje').value.trim(); if(!phone||!msg){alert('Completa teléfono y consulta.');return;} const url=`https://wa.me/${phone.replace(/[^0-9]/g,'')}?text=${encodeURIComponent(msg)}`; window.open(url,'_blank');});
