import axios from 'axios';

const baseURL = 'http://localhost:8000/';

const login = ({ username }) => {
  console.log(username);
  return axios
    .post(baseURL + 'auth/register', { username })
    .then((response) => response.data);
};

const getUser = async () => {
  let userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if (userInfo == null) {
    return new Promise(() => null);
  }
  const config = { headers: { Authorization: 'Basic ' + userInfo.token } };

  return axios
    .get(baseURL + 'api/auth', config)
    .then((response) => response.data);
};
export default { login, getUser };
