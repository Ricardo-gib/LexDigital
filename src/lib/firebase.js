import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js';
import {
  getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult,
  signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification,
  updateProfile, signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js';
import { getFirestore, doc, setDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js';

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
export const db   = getFirestore(app);

const provider = new GoogleAuthProvider();

const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
let _signinPending = false;

export async function signInWithGoogle(){
  if (_signinPending) return;
  _signinPending = true;
  try {
    if (isMobile) {
      sessionStorage.setItem('lexdigital_auth_redirect','1');
      await signInWithRedirect(auth, provider);
      return;
    }
    // Desktop: intenta popup primero
    await signInWithPopup(auth, provider);
    return;
  } catch (e) {
    // Si bloquean popup, cae a redirect
    if (e?.code === 'auth/popup-blocked' || e?.code === 'auth/cancelled-popup-request') {
      sessionStorage.setItem('lexdigital_auth_redirect','1');
      await signInWithRedirect(auth, provider);
    } else {
      throw e;
    }
  } finally {
    _signinPending = false;
  }
}

export async function handleRedirectResult(){
  try {
    const res = await getRedirectResult(auth);
    return res;
  } finally {
    sessionStorage.removeItem('lexdigital_auth_redirect');
    _signinPending = false;
  }
}

/* ---------- Registro/email/password ---------- */
export async function registerWithEmail({ name, age, email, password }){
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  if (name) await updateProfile(cred.user, { displayName: name });
  await setDoc(doc(db, 'users', cred.user.uid), {
    name, age: Number(age) || null, email, createdAt: serverTimestamp()
  });
  await sendEmailVerification(cred.user);
  return cred.user;
}

export function loginWithEmail(email, password){
  return signInWithEmailAndPassword(auth, email, password);
}

