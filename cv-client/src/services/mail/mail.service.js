import Axios from '../axios-instance/axios.service';
import { Iform, IformDefault } from '../../interfaces/allInterfaces';
import GetHtmlTemplate from './email-templates/contactTemplate';
import GetClientHtmlTemplate from './email-templates/clientTemplate';
// const API_URL = process.env.NODE_ENV !== 'development' ? `${window.location.origin}/api/v1` : 'http://localhost:3000/api/v1';
const API_URL = 'https://vabcv-webserver.herokuapp.com/api/v1';
const MAIL_ENDPOINT = 'send-email';

const mailTemplate = { subject: `Получен отклик с сайта CV`, html: '', to: 'dmitruvab1122@gmail.com' };
const clientTemplate = { subject: `Hi, i am Dima Vab`, html: '', to: '' };
async function sendMail(form) {
  mailTemplate.html = GetHtmlTemplate(form);
  clientTemplate.html = GetClientHtmlTemplate();
  clientTemplate.to = form.form.email;

  const { data } = await Axios.post(`${API_URL}/${MAIL_ENDPOINT}`, mailTemplate);
  await Axios.post(`${API_URL}/${MAIL_ENDPOINT}`, clientTemplate);
  // const data = Axios.post('http://localhost:3000/api/v1/send-email', mailTemplate);
  return data;
}
sendMail.propTypes = Iform;
sendMail.defaultTypes = IformDefault;
export default sendMail;
