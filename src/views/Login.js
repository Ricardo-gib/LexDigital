export default function Login(){
  const html = `
  <div class="container">
    <div style="flex:1;display:grid;place-items:center">
      <div class="card" style="max-width:520px;width:100%;text-align:center">
        <img src="assets/icon-512.png" alt="LexDigital" class="full" style="max-width:160px;margin:0 auto 10px">
        <h1>LexDigital</h1>
        <p class="muted">Los servicios legales nunca fueron tan sencillos.</p>
        <div class="grid">
          <a class="btn primary" href="#/home">Ya tengo una cuenta</a>
          <a class="btn" href="#/home?guest=1">Entrar como invitado</a>
          <a class="btn" href="#/home?register=1">Registrarme</a>
        </div>
      </div>
    </div>
  </div>`;
  return { html };
}
