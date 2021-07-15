import './Form.scss';
import { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import EmptyRequestForReloadServer from '../../services/reload-server/reload';
import { IformDefault } from '../../interfaces/allInterfaces';
import sendForm from '../../services/mail/mail.service';

import LoadingSpinner from '../loading-spinner/LoadinрSpinner';

const SITE_KEY = '6LcBaZUbAAAAAHcvOM_vfMgIRibHOZywkbqpJKLL';

const Form = () => {
  const [form, setForm] = useState(IformDefault);
  const [isHuman, setIsHuman] = useState(false);
  const [isShowRequest, setIsShowRequest] = useState();
  const [isShowResponse, setIsShowRespone] = useState();
  const [isRequestSuccess, setIsRequestSuccess] = useState();

  const recaptchaRef = useRef(null);

  useEffect(() => {
    try {
      EmptyRequestForReloadServer();
      // fetch('https://vabcv-webserver.herokuapp.com/api/v1');
    } catch {
      // console.log()
      const err = 'Hi';
    }
  }, []);

  const handleChange = event => {
    const { name } = event.target;
    const { value } = event.target;
    setForm({ ...form, [name]: value });
    event.target.setCustomValidity('');
  };

  const setCusstomValidation = event => {
    const { name } = event.target;
    if (name) event.target.setCustomValidity(`Please input ${name}`);
  };

  const sendFomr = async event => {
    event.preventDefault();
    const hidResponse = () => {
      setIsShowRequest(false);
      setIsShowRespone(false);
      setIsRequestSuccess(false);
    };
    const resetForm = () => {
      setForm(IformDefault);
    };
    const resetCaptcha = () => {
      setIsHuman(false);
      recaptchaRef.current.reset();
    };
    try {
      setIsShowRequest(true);
      const response = await sendForm({ form });
      resetForm();
      resetCaptcha();
      setIsShowRespone(true);
      setIsRequestSuccess(true);
      setTimeout(hidResponse, 3000);
    } catch (error) {
      setIsShowRespone(true);
      setIsRequestSuccess(false);
      setTimeout(hidResponse, 3000);
      console.error(`send Form error:${error}`);
    }
  };

  const handleRecapthcaChange = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue) {
      setIsHuman(true);
    }

    // this.props.onSubmit(recaptchaValue);
  };

  const doNothing = () => {};

  return (
    <div className="form">
      <div className="form__title">
        <h3 className="app-text app-text--ml field_padding app-text--uppercase">Contact</h3>
      </div>
      <form className="form__container form-active" onSubmit={sendFomr}>
        <div className="form-wrapper__row">
          <input
            value={form.name}
            onChange={handleChange}
            name="name"
            type="text"
            className="input-field field_padding hover_border_color_blue field field_padding custom_border"
            placeholder="*Name"
            onInvalid={setCusstomValidation}
            required
          />
          <input
            value={form.company}
            onChange={handleChange}
            name="company"
            type="text"
            className="input-field field_padding hover_border_color_blue field field_padding custom_border"
            placeholder="*Company"
            onInvalid={setCusstomValidation}
            required
          />
        </div>
        <div className="form-wrapper__row">
          <input
            value={form.email}
            onChange={handleChange}
            name="email"
            type="text"
            pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
            className="input-field field_padding hover_border_color_blue field field_padding custom_border"
            placeholder="*Email"
            onInvalid={setCusstomValidation}
            required
          />
          <input
            value={form.phone}
            onChange={handleChange}
            name="phone"
            type="text"
            className="input-field field_padding hover_border_color_blue field field_padding custom_border"
            placeholder="*Phone"
            onInvalid={setCusstomValidation}
            required
          />
        </div>
        <div className="form-wrapper__row">
          <input
            value={form.country}
            onChange={handleChange}
            name="country"
            type="text"
            className="input-field field_padding hover_border_color_blue field field_padding custom_border"
            placeholder="*Country"
            onInvalid={setCusstomValidation}
            required
          />
          <input
            value={form.city}
            onChange={handleChange}
            name="city"
            type="text"
            className="input-field field_padding hover_border_color_blue field field_padding custom_border"
            placeholder="*City"
            onInvalid={setCusstomValidation}
            required
          />
        </div>
        <div className="form-wrapper__row">
          <textarea
            value={form.additionalInfo}
            onChange={handleChange}
            name="additionalInfo"
            className="input-area hover_border_color_blue field field_padding custom_border"
            placeholder="*Other Information"
            onInvalid={setCusstomValidation}
            required
          />
        </div>
        <div className="form-wrapper__row--recaptcha captcha">
          <ReCAPTCHA className="captcha" ref={recaptchaRef} sitekey={SITE_KEY} onChange={handleRecapthcaChange} />
          <input checked={isHuman} className="captcha__checkbox" type="checkbox" required onChange={doNothing} />
        </div>
        <button type="submit" className="submit-btn field_padding app-text--uppercase app-text">
          send
        </button>
      </form>
      {isShowRequest ? (
        <div className="request-note app-text--uppercase app-text app-text--xxl">
          {!isShowResponse ? (
            <LoadingSpinner />
          ) : (
            <>{isRequestSuccess ? <div className="success">Thanks for your reply</div> : <div>Error! check input data</div>}</>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Form;
