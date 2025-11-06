# LexDigital (estructura modular sin build)

- Una vista = un archivo en `src/views/`.
- Router hash (`#/ruta`) compatible con GitHub Pages.
- PWA (manifest + service worker).

## Carpetas
- `assets/` → imágenes, íconos (reemplaza `icon-192.png` y `icon-512.png` por tu LD final).
- `styles/` → CSS global.
- `src/` → JavaScript (router, vistas, componentes).

## Publicar
Sube todo al repo. En GitHub Pages debería cargar. Si no ves cambios, incrementa `?v=` en `index.html` y `sw.js`.

## Nueva pantalla
1. Crea `src/views/Nueva.js` que exporte `{ html }` (y opcional `afterRender`).
2. Importa y mapea en `src/router.js`.
3. Enlaza con `href="#/nueva"`.
