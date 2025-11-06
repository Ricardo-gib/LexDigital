// src/lib/firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js';
import {
  getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult
} from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js';

// === TU CONFIG DE FIREBASE (la que copiaste de la consola) ===
const firebaseConfig = {
  apiKey: "AIzaSyBce-UDqi6xgPeIWBYeQzdWQ-_QrAQFS2s",
  authDomain: "lexdigital-prod-88295.firebaseapp.com",
  projectId: "lexdigital-prod-88295",
  storageBucket: "lexdigital-prod-88295.appspot.com",
  messagingSenderId: "412423415337",
  appId: "1:412423415337:web:6d86437c508d7d9a631c38",
  measurementId: "G-9PRTVW089T"
};

// Init
const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Proveedor Google
const provider = new GoogleAuthProvider();

// Abre selector de cuenta de Google
export function signInWithGoogle(){
  return signInWithRedirect(auth, provider);
}

// Maneja el retorno del redirect (cuando Google vuelve a tu sitio)
export async function handleRedirectResult(){
  try { return await getRedirectResult(auth); }
  catch(e){ console.error('[GoogleRedirectError]', e); return null; }
}
