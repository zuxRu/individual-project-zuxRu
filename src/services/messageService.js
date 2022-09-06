// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const baseURL = 'http://localhost:8000/';

// const getMessage = async () => {
//   const params = useParams();
//   const messageId = { params };
//   let userInfo = JSON.parse(localStorage.getItem('userInfo'));

//   if (userInfo == null) {
//     return new Promise(() => null);
//   }
//   const config = { headers: { Authorization: 'Basic ' + userInfo.token } };

//   return axios.get(baseURL + '/api/conversations/' + messageId, config).then(
//     (response) => response.data
//     // console.log('running the dog ' + JSON.stringify(response.data))
//   );
// };
