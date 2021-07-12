import Axios from "@/services/axios-instance/axios.service";

import { IemailTemplate, FormContact } from "@/interfaces/appInterfaces";
import GetHtmlTemplate from "./email-templates/contact";

const API_URL =
  process.env.NODE_ENV !== "development"
    ? `${window.location.origin}/api/v1`
    : "http://localhost:3000/api/v1";
const MAIL_ENDPOINT = "send-email";

class MailService {
  async sendMail(form) {
    const mail = this.getMailTeplate(form);

    const { data } = await Axios.post(`${API_URL}/${MAIL_ENDPOINT}`, mail);
    return data;
  }
}

export default new MailService();
