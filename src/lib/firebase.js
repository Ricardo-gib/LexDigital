// src/lib/firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup
} from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js';

// === CONFIGURACIÓN DE FIREBASE ===
const firebaseConfig = {
  apiKey: "AIzaSyBce-UDqi6xgPeIWBYeQzdWQ-_QrAQFS2s",
  authDomain: "lexdigital-prod-88295.firebaseapp.com",
  projectId: "lexdigital-prod-88295",
  storageBucket: "lexdigital-prod-88295.appspot.com",
  messagingSenderId: "412423415337",
  appId: "1:412423415337:web:6d86437c508d7d9a631c38",
  measurementId: "G-9PRTVW089T"
};

// Inicializar
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔹 Intenta con Redirect, si falla usa Popup (útil para móvil)
export async function signInWithGoogle() {
  try {
    await signInWithRedirect(auth, provider);
  } catch (err) {
    console.warn('[Redirect failed, trying popup]', err);
    try {
      await signInWithPopup(auth, provider);
    } catch (popupErr) {
      console.error('[Popup error]', popupErr);
      alert('No se pudo abrir Google: ' + popupErr.message);
    }
  }
}

// Manejo de retorno desde redirect
export async function handleRedirectResult() {
  try {
    const result = await getRedirectResult(auth);
    if (result?.user) console.log('[Firebase] Usuario autenticado:', result.user.email);
    return result;
  } catch (err) {
    console.error('[RedirectResult error]', err);
    return null;
  }
}

