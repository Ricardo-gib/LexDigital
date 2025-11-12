import TabBar from '../components/TabBar.js';

export default function Abogado() {
  const html = `
  <div class="container">
    <div class="card">
      <h1>Mis Abogados LexDigital</h1>
      <div class="grid">
      
        <div class="card">
          <div class="card-body">
            <img class="card-img" src="assets/abogada1.png" alt="Foto abogada 1" style="width:64px;height:64px;border-radius:50%;object-fit:cover">
            <div class="card-info">
              <h3>Dra. Maricielo</h3>
              <p class="text-muted">Laboral</p>
            </div>
          </div>
          <div style="display:flex;gap:8px;margin-top:12px">
            <a class="btn primary" href="https://wa.me/51999999999?text=Hola%20necesito%20orientación" target="_blank">WhatsApp</a>
            <a class="btn" href="#abogada-1-videollamada">Videollamada</a>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img class="card-img" src="assets/abogado2.png" alt="Foto abogado 2" style="width:64px;height:64px;border-radius:50%;object-fit:cover">
            <div class="card-info">
              <h3>Dr. Pérez</h3>
              <p class="text-muted">Civil</p>
            </div>
          </div>
          <div style="display:flex;gap:8px;margin-top:12px">
            <a class="btn primary" href="https://wa.me/51999999999?text=Hola%20necesito%20orientación" target="_blank">WhatsApp</a>
            <a class="btn" href="#abogado-2-videollamada">Videollamada</a>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img class="card-img" src="assets/abogada3.png" alt="Foto abogada 3" style="width:64px;height:64px;border-radius:50%;object-fit:cover">
            <div class="card-info">
              <h3>Dra. García</h3>
              <p class="text-muted">Penal</p>
            </div>
          </div>
          <div style="display:flex;gap:8px;margin-top:12px">
            <a class="btn primary" href="https://wa.me/51999999999?text=Hola%20necesito%20orientación" target="_blank">WhatsApp</a>
            <a class="btn" href="#abogada-3-videollamada">Videollamada</a>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img class="card-img" src="assets/abogado4.png" alt="Foto abogado 4" style="width:64px;height:64px;border-radius:50%;object-fit:cover">
            <div class="card-info">
              <h3>Dr. Ramírez</h3>
              <p class="text-muted">Empresarial</p>
            </div>
          </div>
          <div style="display:flex;gap:8px;margin-top:12px">
            <a class="btn primary" href="https://wa.me/51999999999?text=Hola%20necesito%20orientación" target="_blank">WhatsApp</a>
            <a class="btn" href="#abogado-4-videollamada">Videollamada</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  ${TabBar('abogado')}
  `;
  return { html };
}

