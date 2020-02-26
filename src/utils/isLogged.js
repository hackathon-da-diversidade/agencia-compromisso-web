import authAPI from '../api/authAPI';

export default function isLogged() {
  return authAPI.fetchMe().then(res => res.data.logged);
}
