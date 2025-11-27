import TabBar from '../components/TabBar.js';
export default function Cursos(){
  const html = `
  <div class="container">
    <div class="card"><h1>Cursos</h1><p>Próximamente.</p></div>
    ${TabBar('cursos')}
  </div>`;
  return { html };
}
