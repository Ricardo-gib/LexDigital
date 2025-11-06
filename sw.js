// sw.js — scope relativo (./) para que funcione bajo /LexDigital/
self.addEventListener('install', (event) => {
  // Activación inmediata del nuevo SW
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Tomar control de las páginas abiertas
  event.waitUntil(self.clients.claim());
});

// Deja pasar todas las requests (SPA con hash routing no necesita más)
self.addEventListener('fetch', () => {});
