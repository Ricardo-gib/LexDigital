import TabBar from '../components/TabBar.js';
export default function Planes(){
  const html = `
  <div class="container">
    <div class="card">
      <h1>Guías y documentos legales</h1>
      <p class="text-muted">
        Aquí encontrarás checklists y orientaciones básicas para que prepares tus trámites
        antes de hablar con un abogado.
      </p>

      <h2>Checklist para tu primera consulta legal</h2>
      <ul>
        <li>Tu DNI y datos de contacto.</li>
        <li>Relato breve de lo que ha pasado, con fechas importantes.</li>
        <li>Contratos, boletas, recibos o documentos relacionados.</li>
        <li>Capturas de conversaciones relevantes (WhatsApp, correos, etc.).</li>
        <li>Lista de preguntas que quieres hacerle al abogado.</li>
      </ul>

      <h2>Checklist para denuncia o reclamo</h2>
      <ul>
        <li>Identificar claramente a la persona, empresa o institución involucrada.</li>
        <li>Reunir pruebas: fotos, videos, audios, documentos.</li>
        <li>Anotar fechas y lugares de cada hecho importante.</li>
        <li>Guardar todo en una carpeta física o digital.</li>
        <li>Decidir si buscarás primero una solución amistosa o directamente la vía legal.</li>
      </ul>

      <p class="text-muted">
        Esta información no reemplaza una asesoría profesional, pero te ayuda a llegar
        mejor preparado a tu cita presencial o virtual.
      </p>
    </div>
    ${TabBar('planes')}
  </div>`;
  return { html };
}
