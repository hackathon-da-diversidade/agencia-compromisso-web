import authenticationAPI from '../api/authenticationAPI';

export default function isLogged() {
  return authenticationAPI.fetchMe().then(res => res.data.logged);
}
