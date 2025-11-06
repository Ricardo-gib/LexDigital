// src/main.js
import router from './router.js';

console.log('[MAIN] init');

function go() {
  console.log('[MAIN] hashchange/domcontentloaded -> router()');
  router();
}

window.addEventListener('hashchange', go);
window.addEventListener('DOMContentLoaded', () => router('/')); // carga inicial
