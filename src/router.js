// src/router.js
import Home from './views/Home.js';
import Login from './views/Login.js';
import Register from './views/Register.js';

// Rutas: aceptamos con y sin slash
const routes = {
  '/': Home, 'home': Home, '/home': Home, 'inicio': Home, '/inicio': Home,
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

// Renderiza Node, string o {html, onMount}
function renderTo(mount, out) {
  // 1) Si devuelve un Node/Element
  if (out instanceof Node) {
    mount.replaceChildren(out);
    return;
  }
  // 2) Si devuelve objeto con { html, onMount }
  if (out && typeof out === 'object' && 'html' in out) {
    const wrap = document.createElement('div');
    wrap.innerHTML = out.html;
    mount.replaceChildren(...wrap.childNodes);
    if (typeof out.onMount === 'function') out.onMount();
    return;
  }
  // 3) Si devuelve string crudo
  if (typeof out === 'string') {
    const wrap = document.createElement('div');
    wrap.innerHTML = out;
    mount.replaceChildren(...wrap.childNodes);
    return;
  }
  // 4) Fallback visible
  mount.textContent = '[Router] Vista inválida.';
}

export default function router(navigateTo) {
  const mount = document.getElementById('app');
  const path = normalizeRoute(navigateTo ?? location.hash);

  try {
    const View = pickView(path);
    const out = View();
    renderTo(mount, out);
  } catch (err) {
    console.error('[Router error]', err);
    mount.innerHTML = `<pre style="white-space:pre-wrap;background:#fee;color:#900;padding:12px;border-radius:8px">
[Router error] ${String(err?.message || err)}
Ruta: ${path}
</pre>`;
  }
}

window.addEventListener('hashchange', () => router());
window.addEventListener('DOMContentLoaded', () => router('/'));
