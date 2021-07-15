import Axios from '../axios-instance/axios.service';

const API_URL = 'https://vabcv-webserver.herokuapp.com/api/v1';
const RELOAD_ENDPOINT = 'reload';

async function sendMail(form) {
  const { data } = await Axios.get(`${API_URL}/${RELOAD_ENDPOINT}`);
  // const data = Axios.post('http://localhost:3000/api/v1/send-email', mailTemplate);
  return data;
}

export default sendMail;
