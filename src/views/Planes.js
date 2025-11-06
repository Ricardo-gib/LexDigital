import TabBar from '../components/TabBar.js';
export default function Planes(){
  const html = `
  <div class="container">
    <div class="card"><h1>Planes</h1>
      <div class="grid cols-2">
        <div class="card"><b>Básico</b><p>S/49/mes</p></div>
        <div class="card"><b>Pro</b><p>S/99/mes</p></div>
      </div>
    </div>
    ${TabBar('planes')}
  </div>`;
  return { html };
}
