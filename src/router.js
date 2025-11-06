// src/router.js
import Home from './views/Home.js';
import Login from './views/Login.js';
import Register from './views/Register.js';

// Mapa de rutas: incluimos claves con y sin slash
const routes = {
  '/': Home,
  'home': Home,
  '/home': Home,
  'inicio': Home,
  '/inicio': Home,

  'login': Login,
  '/login': Login,

  'register': Register,
  '/register': Register,
};

// Normaliza el hash a una ruta tipo "/login"
function normalizeRoute(rawHash) {
  const raw = (rawHash ?? location.hash).replace(/^#/, '').trim();
  if (!raw || raw === '/') return '/';
  return raw.startsWith('/') ? raw : `/${raw}`;
}

function pickView(path) {
  // intenta exacto; si no, intenta sin el slash; si no, Home
  return routes[path] || routes[path.replace(/^\//, '')] || Home;
}

export default function router(navigateTo) {
  const mount = document.getElementById('app');
  const path = normalizeRoute(navigateTo ?? location.hash);

  const View = pickView(path);
  const out = View(); // puede ser Node o string

  // Render seguro para Node o string
  if (out instanceof Node) {
    mount.replaceChildren(out);
  } else {
    // si es string, mételo en un contenedor temporal
    const wrapper = document.createElement('div');
    wrapper.innerHTML = out;
    // si tu vista devuelve varias raíces, insertamos todas
    mount.replaceChildren(...wrapper.childNodes);
  }
}

// Escuchar cambios de hash e iniciar
window.addEventListener('hashchange', () => router());
window.addEventListener('DOMContentLoaded', () => router('/'));

