// src/main.js
import router from './router.js';
import { auth } from './lib/firebase.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js';

window.addEventListener('hashchange', () => router());
window.addEventListener('DOMContentLoaded', () => router('/'));

onAuthStateChanged(auth, (user) => {
  console.log('[AUTH] user', user?.email || null);
  // Ejemplo: si ya está logueado y está en #/login, llévalo al home
  const path = (location.hash || '').replace(/^#/, '');
  if (user && (path === 'login' || path === '/login')) {
    location.hash = '#/home';
  }
});
