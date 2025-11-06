// src/views/Home.js
export default function Home() {
  const $ = (sel, el = document) => el.querySelector(sel);

  const root = document.createElement("div");
  root.className = "screen home";

  root.innerHTML = `
    <section class="welcome-hero">
      <div class="hero-top">
        <img src="assets/icon_512.png" alt="LexDigital" class="hero-logo" loading="eager" decoding="async"/>
        <h1 class="brand">
          <span>Lex</span><span class="accent">Digital</span>
        </h1>
        <p class="tagline">Asesoría legal clara, rápida y segura.</p>
      </div>

      <div class="hero-card">
        <button id="btn-login" class="btn primary">Acceder con correo</button>
        <button id="btn-register" class="btn">Registrarme</button>
        <a id="link-guest" href="#abogado" class="link-invite">Acceder como invitado</a>
      </div>
    </section>
  `;

  const go = (hash) => { window.location.hash = hash; };

  $("#btn-login", root)?.addEventListener("click", () => go("#login"));
  // Si aún no tienes una vista de registro, lo mandamos al login con flag:
  $("#btn-register", root)?.addEventListener("click", () => go("#login?mode=signup"));
  $("#link-guest", root)?.addEventListener("click", (e) => {
    e.preventDefault();
    go("#abogado"); // o a donde quieras que entre el invitado
  });

  return root;
}
