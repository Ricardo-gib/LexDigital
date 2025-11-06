import TabBar from '../components/TabBar.js';
export default function Abogado(){
  const html = `
  <div class="container">
    <div class="card">
      <h1>Mi Abogado</h1>
      <div class="grid">
        <div class="card">
          <div style="display:flex;gap:12px;align-items:center">
            <img src="assets/lawyer1.jpg" alt="" style="width:64px;height:64px;border-radius:50%;object-fit:cover">
            <div><b>Dra. Pérez</b><div class="muted">Laboral</div></div>
          </div>
          <div style="display:flex;gap:8px;margin-top:12px">
            <a class="btn primary" href="https://wa.me/51999999999?text=Hola%2C%20necesito%20orientaci%C3%B3n" target="_blank">WhatsApp</a>
            <a class="btn" href="#/abogado?videollamada=1">Videollamada</a>
          </div>
        </div>
      </div>
    </div>
    ${TabBar('abogado')}
  </div>`;
  return { html };
}
