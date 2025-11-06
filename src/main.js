import { initRouter } from './router.js';
const app = document.getElementById('app');
export function mount(html, after){ app.innerHTML = html; if(after) after(); }
initRouter();
