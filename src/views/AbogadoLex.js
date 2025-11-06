// src/views/AbogadoLex.js
export default function AbogadoLex(){
  const el = document.createElement('section');
  el.className = 'screen full-screen';

  el.innerHTML = `
    <div class="app-card full-card">
      <header class="app-hero">
        <div class="avatar large" aria-hidden="true">
          <img src="assets/icon_512.png?v=25" alt="Logo LexDigital" />
        </div>
        <h1 class="app-title">
          Abogado<br><span>LexDigital</span>
        </h1>
      </header>

      <nav class="menu-list large-menu">
        <a class="pill-btn" href="#/abogado">Mi Abogado Legal</a>
        <a class="pill-btn" href="#/contratos">Contratos y Planillas</a>
        <a class="pill-btn" href="#/cursos">Cursos Legales</a>
        <a class="pill-btn" href="#/planes">Planes y Precios</a>
      </nav>
    </div>
  `;
  return el;
}
