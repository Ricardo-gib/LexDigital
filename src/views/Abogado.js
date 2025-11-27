import TabBar from '../components/TabBar.js';

export default function Abogado() {
  const html = `
  <div class="container">
    <div class="card">
      <h1>Mis Abogados LexDigital</h1>
      <div class="grid">
      
        <div class="card">
          <div class="card-body">
            <img class="card-img" src="assets/abogada_192.png" alt="Foto Dra. Maylee" style="width:64px;height:64px;border-radius:50%;object-fit:cover">
            <div class="card-info">
              <h3>Dra. Maylee De La Cruz</h3>
              <p class="text-muted">Laboral</p>
            </div>
          </div>
          <div style="display:flex;gap:8px;margin-top:12px">
            <a class="btn primary" href="#/dra-maylee">Seleccionar</a>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img class="card-img" src="assets/abogada_192.png" alt="Foto Dra. Laura Romero" style="width:64px;height:64px;border-radius:50%;object-fit:cover">
            <div class="card-info">
              <h3>Dra. Laura Romero</h3>
              <p class="text-muted">Civil</p>
            </div>
          </div>
          <div style="display:flex;gap:8px;margin-top:12px">
            <a class="btn primary" href="#/dra-laura">Seleccionar</a>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img class="card-img" src="assets/abogado_192.png" alt="Foto Dr. Franklin Vicente" style="width:64px;height:64px;border-radius:50%;object-fit:cover">
            <div class="card-info">
              <h3>Dr. Franklin Vicente</h3>
              <p class="text-muted">Penal</p>
            </div>
          </div>
          <div style="display:flex;gap:8px;margin-top:12px">
            <a class="btn primary" href="#/dr-franklin">Seleccionar</a>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <img class="card-img" src="assets/abogada_192.png" alt="Foto Dra. Maricielo Garcia" style="width:64px;height:64px;border-radius:50%;object-fit:cover">
            <div class="card-info">
              <h3>Dra. Maricielo Garcia</h3>
              <p class="text-muted">Empresarial</p>
            </div>
          </div>
          <div style="display:flex;gap:8px;margin-top:12px">
            <a class="btn primary" href="#/dra-maricielo">Seleccionar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  ${TabBar('abogado')}
  `;
  return { html };
}
