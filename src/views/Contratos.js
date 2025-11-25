import TabBar from '../components/TabBar.js';
export default function Contratos(){
  const html = `
  <div class="container">
    <div class="card">
      <h1>Contratos</h1>
      <div class="grid cols-2">
        <div class="card link"><b>Arrendamiento</b><p>Alquiler de inmueble</p></div>
        <div class="card link"><b>Compraventa</b><p>Bien mueble</p></div>
      </div>
    </div>
    ${TabBar('contratos')}
  </div>`;
  return { html };
}
