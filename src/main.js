import router from './router.js';
import { auth } from './lib/firebase.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js';

window.addEventListener('hashchange', () => router());
window.addEventListener('DOMContentLoaded', () => router('/'));

onAuthStateChanged(auth, (user) => {
  const path = (location.hash || '').replace(/^#/, '');
  if (user) {
    if (!user.emailVerified && path !== '/register' && path !== 'register') {
      // aquí podrías mostrar un aviso para que confirme su correo
      console.log('Usuario no verificado:', user.email);
    }
  }
});
