import "./Form.scss";
import { useState } from "react";
import { Iform, IformDefault } from "../../interfaces/allInterfaces";

const Form = () => {
  const [form, setForm] = useState(IformDefault);

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setForm({ ...form, [name]: value });
    event.target.setCustomValidity("");
  };

  const setCusstomValidation = (event) => {
    const { name } = event.target;
    if (name) event.target.setCustomValidity(`Please input ${name}`);
  };

  const sendFomr = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form">
      <div className="form__title">
        <h3 className="app-text app-text--ml field_padding app-text--uppercase">
          Contact
        </h3>
      </div>
      <form className="form__container form-active" onSubmit={sendFomr}>
        <div className="form-wrapper__row">
          <input
            value={form.firstName}
            onChange={handleChange}
            name="firstName"
            type="text"
            className="input-field field_padding hover_border_color_blue field field_padding custom_border"
            placeholder="*First Name"
            onInvalid={setCusstomValidation}
            required
          />
          <input
            value={form.lastName}
            onChange={handleChange}
            name="lastName"
            type="text"
            className="input-field field_padding hover_border_color_blue field field_padding custom_border"
            placeholder="*Last Name"
            onInvalid={setCusstomValidation}
            required
          />
        </div>
        <div class="form-wrapper__row">
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
        <div class="form-wrapper__row">
          <textarea
            value={form.additional}
            onChange={handleChange}
            name="additional"
            className="input-area hover_border_color_blue field field_padding custom_border"
            placeholder="*Other Information"
            onInvalid={setCusstomValidation}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="submit-btn field_padding app-text--uppercase app-text"
        >
          send
        </button>
      </form>
    </div>
  );
};

export default Form;
