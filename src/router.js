import Home from './views/Home.js';
import Login from './views/Login.js';
import Register from './views/Register.js';

const routes = {
  '/': Home,
  'home': Home, '/home': Home,
  'inicio': Home, '/inicio': Home,
  'login': Login, '/login': Login,
  'register': Register, '/register': Register,
};

function normalizeRoute(rawHash) {
  const raw = (rawHash ?? location.hash).replace(/^#/, '').trim();
  if (!raw || raw === '/') return '/';
  return raw.startsWith('/') ? raw : `/${raw}`;
}
function pickView(path) {
  return routes[path] || routes[path.replace(/^\//, '')] || Home;
}

export default function router(navigateTo) {
  const mount = document.getElementById('app');
  const path = normalizeRoute(navigateTo ?? location.hash);
  const View = pickView(path);
  const out = View();

  if (out instanceof Node) {
    mount.replaceChildren(out);
  } else {
    const wrap = document.createElement('div');
    wrap.innerHTML = out;
    mount.replaceChildren(...wrap.childNodes);
  }
}

window.addEventListener('hashchange', () => router());
window.addEventListener('DOMContentLoaded', () => router('/'));
