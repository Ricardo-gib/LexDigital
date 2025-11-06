// src/router.js
import Home from './views/Home.js';
import Login from './views/Login.js';
import Register from './views/Register.js';
// ... importa otras vistas que ya tengas

const routes = {
  '/': Home,
  '/inicio': Home,          // alias por compatibilidad si ya lo usabas
  '/login': Login,
  '/register': Register,
  // ...tus demás rutas
};

export default function router(navigateTo = location.hash.slice(1) || '/') {
  const mount = document.getElementById('app');
  const path = navigateTo.startsWith('/')
    ? navigateTo
    : (navigateTo ? navigateTo.replace(/^#/, '') : '/');
  const view = routes[path] || Home;
  mount.innerHTML = view();
}

// listeners para navegación hash
window.addEventListener('hashchange', () => {
  const path = location.hash.slice(1) || '/';
  router(path.startsWith('/') ? path : `/${path}`);
});
window.addEventListener('DOMContentLoaded', () => router('/'));

