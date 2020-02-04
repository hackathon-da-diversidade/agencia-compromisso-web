export default function isLogged() {
  const access_token_storage = localStorage.getItem('access_token');
  return !!access_token_storage;
}
