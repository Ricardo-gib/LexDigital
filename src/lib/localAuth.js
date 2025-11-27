export function loadUsers() {
  try {
    const raw = localStorage.getItem('lex_users');
    if (!raw) return {};
    const data = JSON.parse(raw);
    return data && typeof data === 'object' ? data : {};
  } catch (e) {
    console.error('[localAuth] loadUsers error', e);
    return {};
  }
}

export function saveUsers(users) {
  try {
    localStorage.setItem('lex_users', JSON.stringify(users || {}));
  } catch (e) {
    console.error('[localAuth] saveUsers error', e);
  }
}

export function registerUser({ id, name, password, phone, email }) {
  const users = loadUsers();
  if (!id) throw new Error('El ID de usuario es obligatorio.');
  if (users[id]) {
    throw new Error('Ya existe una cuenta con ese ID. Elige otro.');
  }
  users[id] = { id, name, password, phone, email };
  saveUsers(users);
  setCurrentUser(id);
  return users[id];
}

export function loginUser(id, password) {
  const users = loadUsers();
  const user = users[id];
  if (!user) throw new Error('No existe una cuenta con ese ID.');
  if (user.password !== password) throw new Error('Contraseña incorrecta.');
  setCurrentUser(id);
  return user;
}

export function setCurrentUser(id) {
  try {
    localStorage.setItem('lex_current_user', id || '');
  } catch (e) {
    console.error('[localAuth] setCurrentUser error', e);
  }
}

export function getCurrentUser() {
  const users = loadUsers();
  try {
    const id = localStorage.getItem('lex_current_user');
    if (!id) return null;
    return users[id] || null;
  } catch {
    return null;
  }
}

export function updatePassword(id, newPassword) {
  const users = loadUsers();
  const user = users[id];
  if (!user) throw new Error('No se encontró el usuario.');
  user.password = newPassword;
  users[id] = user;
  saveUsers(users);
  return user;
}
