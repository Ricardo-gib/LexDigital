import Home from './views/Home.js';
import Login from './views/Login.js';
import Register from './views/Register.js';

import AbogadoLex from './views/AbogadoLex.js';
import Abogado from './views/Abogado.js';
import Contratos from './views/Contratos.js';
import Cursos from './views/Cursos.js';
import Planes from './views/Planes.js';

import Maylee from './views/Dra. Maylee.js';
import Laura from './views/Dra. Laura.js';
import Franklin from './views/Dr. Franklin.js';
import Maricielo from './views/Dra. Maricielo.js';

const routes = {
  '/': Home, 'home': Home, '/home': Home, 'inicio': Home, '/inicio': Home,
  'login': Login, '/login': Login,
  'register': Register, '/register': Register,

  'abogadolex': AbogadoLex, '/abogadolex': AbogadoLex,

  'abogado': Abogado, '/abogado': Abogado,
  'contratos': Contratos, '/contratos': Contratos,
  'cursos': Cursos, '/cursos': Cursos,
  'planes': Planes, '/planes': Planes,

  'dra-maylee': Maylee, '/dra-maylee': Maylee,
  'dra-laura': Laura, '/dra-laura': Laura,
  'dr-franklin': Franklin, '/dr-franklin': Franklin,
  'dra-maricielo': Maricielo, '/dra-maricielo': Maricielo,
};

function normalizeRoute(rawHash) {
  const raw = (rawHash ?? location.hash).replace(/^#/, '').trim();
  if (!raw || raw === '/') return '/';
  return raw.startsWith('/') ? raw : `/${raw}`;
}

function pickView(path) {
  return routes[path] || routes[path.replace(/^\//, '')] || Home;
}

function renderTo(mount, out) {
  if (out instanceof Node) { mount.replaceChildren(out); return; }
  if (out && typeof out === 'object' && 'html' in out) {
    const wrap = document.createElement('div');
    wrap.innerHTML = out.html;
    mount.replaceChildren(...wrap.childNodes);
    if (typeof out.onMount === 'function') out.onMount();
    return;
  }
  if (typeof out === 'string') {
    const wrap = document.createElement('div');
    wrap.innerHTML = out;
    mount.replaceChildren(...wrap.childNodes);
    return;
  }
  mount.textContent = '[Router] Vista inválida.';
}

export default function router(navigateTo) {
  const mount = document.getElementById('app');
  const path = normalizeRoute(navigateTo ?? location.hash);
  console.log('[ROUTER] path ->', path);
  try {
    const View = pickView(path);
    const out = View();
    console.log('[ROUTER] render view ->', View.name);
    renderTo(mount, out);
  } catch (err) {
    console.error('[ROUTER ERROR]', err);
    mount.innerHTML = `<pre style="white-space:pre-wrap;background:#fee;color:#900;padding:12px;border-radius:8px">
[Router error] ${String(err?.message || err)}
Ruta: ${path}
</pre>`;
  }
}

window.addEventListener('hashchange', () => router());
window.addEventListener('DOMContentLoaded', () => router('/'));
