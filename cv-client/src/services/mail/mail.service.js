import Axios from '../axios-instance/axios.service';
import { Iform, IformDefault } from '../../interfaces/allInterfaces';
import GetHtmlTemplate from './email-templates/contactTemplate';

// const API_URL = process.env.NODE_ENV !== 'development' ? `${window.location.origin}/api/v1` : 'http://localhost:3000/api/v1';
const API_URL = 'http://localhost:3000/api/v1';
const MAIL_ENDPOINT = 'send-email';

const mailTemplate = { subject: `Получен отклик с сайта CV`, html: '' };
async function sendMail(form) {
  mailTemplate.html = GetHtmlTemplate(form);

  const { data } = await Axios.post(`${API_URL}/${MAIL_ENDPOINT}`, mailTemplate);
  // const data = Axios.post('http://localhost:3000/api/v1/send-email', mailTemplate);
  return data;
}
sendMail.propTypes = Iform;
sendMail.defaultTypes = IformDefault;
export default sendMail;
