// Forzar cache-bust de todos los módulos
const V = '26';

function mount(el) {
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(el);
}

// Router mínimo solo para Home (ajústalo si tienes más vistas)
async function render() {
  // import dinámico con query ?v=... para bustear caché del módulo
  const mod = await import(`./views/Home.js?v=${V}`);
  const view = mod.default({ V });
  mount(view);
}

window.addEventListener('hashchange', render);
render();

