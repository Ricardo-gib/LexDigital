// src/lib/firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyBce-UDqi6xgPeIWBYeQzdWQ-_QrAQFS2s",
  authDomain: "lexdigital-prod-88295.firebaseapp.com",
  projectId: "lexdigital-prod-88295",
  storageBucket: "lexdigital-prod-88295.appspot.com",
  messagingSenderId: "412423415337",
  appId: "1:412423415337:web:6d86437c508d7d9a631c38",
  measurementId: "G-9PRTVW089T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Evita doble inicio (clicks repetidos)
let _signinPending = false;

export async function signInWithGoogle() {
  if (_signinPending) return;
  _signinPending = true;
  sessionStorage.setItem('lexdigital_auth_redirect', '1'); // marca para saber que fuimos a Google
  await signInWithRedirect(auth, provider);
}

export async function handleRedirectResult() {
  try {
    const res = await getRedirectResult(auth);
    // Limpia la marca (hayamos recibido res o no)
    sessionStorage.removeItem('lexdigital_auth_redirect');
    return res;
  } catch (err) {
    sessionStorage.removeItem('lexdigital_auth_redirect');
    console.error('[RedirectResult error]', err);
    return null;
  } finally {
    _signinPending = false;
  }
}

