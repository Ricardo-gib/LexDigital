export default function AbogadoLex() { 
  const el = document.createElement('section');
  el.className = 'screen full-screen';

  el.innerHTML = `
    <div class="app-card full-card">
      <header class="app-hero">
        <div class="avatar large" aria-hidden="true">
          <img src="assets/icon_1024.png?v=36" alt="Logo LexDigital" />
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

  Object.assign(el.style, { height: '100svh', minHeight: '100svh', width: '100vw' });
  document.documentElement.style.height = '100%';
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.height = '100svh';
  document.body.style.width = '100vw';

  return el;
}

