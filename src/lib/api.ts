export function authFetch(input: RequestInfo, init: RequestInit = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('auth.token') : null;
  const headers = new Headers(init.headers || {});
  if (token) headers.set('Authorization', `Bearer ${token}`);
  return fetch(input, { ...init, headers });
}
