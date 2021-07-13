// import { React } from "react";
// import "./Contacts.scss";

// function Contacts() {
//   return (
//     <div className="contacts">
//       <div>
//         <form>
//           <div className="row-cs">
//             <select value={this.state.reason}>
//               <option value="Offer full-time job"></option>
//               <option value="Offer project"></option>
//               <option value="Offer temporary job"></option>
//             </select>
//           </div>
//           <div className="row-cs"></div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contacts;
// <script lang="ts">
// import { Component, Vue } from 'vue-property-decorator';
// import Cv from '@/components/resume/Cv.vue';
// import { FormContact, Select, IemailTemplate } from '@/interfaces/appInterfaces';
// import Recaptcha from '@/components/recaptcha/Recaptcha.vue';
// import MailService from '@/services/mail/mail.service';
// import LoadingSpinner from '@/components/loading-spinner/LoadinрSpinner.vue';

// import '../../resume/Cv.scss';
// import './Contacts.scss';
// @Component({
//   components: {
//     Cv,
//     Recaptcha,
//     LoadingSpinner,
//   },
// })
// export default class Contacts extends Vue {
//   public isLoading = false;
//   public isShowCaptcha = false;
//   public isResponseSuccess = false;
//   public isShowResponseMessage = false;
//   public isHuman = false;
//   public create = true;
//   public addJob = false;
//   private service = MailService;

//   public options = [
//     { value: 'Работа в компании', text: 'Работа в компании' },
//     { value: 'Начало карьеры', text: 'Начало карьеры' },
//     { value: 'Сотрудничество', text: 'Сотрудничество' },
//     { value: 'Сообщить о работе сайта', text: 'Сообщить о работе сайта' },
//     { value: 'Другое', text: 'Другое' },
//   ];
//   public formCont: FormContact = {
//     treatment: null,
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     country: '',
//     city: '',
//     company: '',
//     jobPosition: '',
//     question: '',
//   };
//   public mailTemplate: IemailTemplate = {
//     subject: '',
//     html: '',
//   };
//   public SelectProps: Select = {
//     options: ['Работа в компании', 'Начало карьеры', 'Сотрудничество', 'Сообщить о работе сайта', 'Другое'],
//     default: ['Работа в компании'],
//   };

//   public get isSendDisabled(): boolean {
//     return !this.isHuman;
//   }
//   public robotChange(v: boolean): void {
//     this.isHuman = false;
//     this.isHuman = v;
//   }
//   public created(): void {
//     window.scrollTo(0, 0);
//   }

//   public addJobClick(): void {
//     this.addJob = true;
//   }

//   public onClickSend(): void {
//     this.create = true;
//   }

//   public onClickCreate(): void {
//     this.create = false;
//   }

//   public async sendMail(): Promise<void> {
//     if (this.isHuman) {
//       try {
//         this.isHuman = false;
//         this.isShowResponseMessage = true;
//         this.isLoading = true;
//         this.mailTemplate.subject = `Получен отклик с сайта CV, тема обращения: ${this.formCont.treatment}`;
//         this.mailTemplate.html = this.service.getMailTeplate(this.formCont);
//         await this.service.sendMail(this.mailTemplate);

//         this.isLoading = false;
//         this.isResponseSuccess = true;

//         setTimeout(() => (this.isShowResponseMessage = false), 3000);

//         this.formCont = {
//           treatment: '',
//           firstName: '',
//           lastName: '',
//           email: '',
//           phone: '',
//           country: '',
//           city: '',
//           company: '',
//           jobPosition: '',
//           question: '',
//         };
//         this.isHuman = true;
//       } catch (error) {
//         console.error(error);
//         this.isResponseSuccess = false;
//         this.isLoading = false;
//         this.isHuman = true;
//         setTimeout(() => (this.isShowResponseMessage = false), 3000);
//       }
//     }
//   }
// }
// </script>
