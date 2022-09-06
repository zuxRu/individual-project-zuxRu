import axios from 'axios';

const baseURL = 'http://localhost:8000/';

const getConvos = async () => {
  let userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if (userInfo == null) {
    return new Promise(() => null);
  }
  const config = { headers: { Authorization: 'Basic ' + userInfo.token } };

  return axios.get(baseURL + 'api/conversations', config).then(
    (response) => response.data.conversations
    // console.log('running the dog ' + JSON.stringify(response.data))
  );
};

const createConvo = async (newConvo) => {
  let userInfo = JSON.parse(localStorage.getItem('userInfo'));

  if (userInfo == null) {
    return new Promise(() => null);
  }
  const config = { headers: { Authorization: 'Basic ' + userInfo.token } };
  console.log(
    baseURL + 'api/conversations',
    JSON.stringify(newConvo),
    JSON.stringify(config)
  );
  return axios
    .post(baseURL + 'api/conversations', { title: newConvo }, config)
    .then((response) => response.data);
};

export default { getConvos, createConvo };
