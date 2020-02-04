export default async function setLocalStorage(status, accessToken) {
  let promise = new Promise((resolve, reject) => {
    status === 200 && localStorage.setItem('access_token', accessToken);
    const access_token = localStorage.getItem('access_token');
    resolve(!!access_token);
    reject(!access_token);
  });
  return await promise;
}
