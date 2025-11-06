// src/views/AbogadoLex.js
export default function AbogadoLex(){
  const el = document.createElement('section');
  el.className = 'screen';

  el.innerHTML = `
    <div class="app-card">
      <header class="app-hero">
        <div class="avatar" aria-hidden="true">
          <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
            <circle cx="32" cy="24" r="14" fill="currentColor" opacity=".14"/>
            <rect x="12" y="40" width="40" height="18" rx="9" fill="currentColor" opacity=".14"/>
          </svg>
        </div>
        <h1 class="app-title">Abogado<br><span>LexDigital</span></h1>
      </header>

      <nav class="menu-list">
        <a class="pill-btn" href="#/abogado">Mi Abogado Legal</a>
        <a class="pill-btn" href="#/contratos">Contratos y Planillas</a>
        <a class="pill-btn" href="#/cursos">Cursos Legales</a>
        <a class="pill-btn" href="#/planes">Planes y Precios</a>
      </nav>
    </div>
  `;
  return el;
}
