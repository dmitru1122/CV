import "./Form.scss";
import { useState } from "react";
import { Iform, IformDefault } from "../../interfaces/allInterfaces";

const Form = () => {
  const [form, setForm] = useState(IformDefault);

  const handleChange = (event) => {
    console.log(event);
    const name = event.target.name;
    const { value } = event.target;
    console.log(value);
    console.log(name);
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="form">
      <div class="form__title">
        <h3 class="app-text app-text--ml field_padding app-text--uppercase">
          Contact
        </h3>
      </div>
      <form class="form__container form-active">
        <div class="form-wrapper__row">
          <input
            value={form.firstName}
            onChange={handleChange}
            name="firstName"
            type="text"
            class="input-field field_padding hover_border_color_blue field field_padding custom_border"
            placeholder="*First Name"
            oninvalid="setCustomValidity('Please input First Name')"
            onchange="setCustomValidity('')"
            required
          />
          <input
            value={form.lastName}
            onChange={handleChange}
            name="lastName"
            type="text"
            class="input-field field_padding hover_border_color_blue field field_padding custom_border"
            placeholder="*Last Name"
            oninvalid="setCustomValidity('Please input Last Name')"
            onchange="setCustomValidity('')"
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
            class="input-field field_padding hover_border_color_blue field field_padding custom_border"
            placeholder="*Email"
            oninvalid="setCustomValidity('Please input Email')"
            onchange="setCustomValidity('')"
            required
          />
          <input
            value={form.phone}
            onChange={handleChange}
            name="phone"
            type="text"
            class="input-field field_padding hover_border_color_blue field field_padding custom_border"
            placeholder="*Phone"
            oninvalid="setCustomValidity('Please input Phone')"
            onchange="setCustomValidity('')"
            required
          />
        </div>
        <div class="form-wrapper__row">
          <textarea
            value={form.additional}
            onChange={handleChange}
            name="additional"
            class="input-area hover_border_color_blue field field_padding custom_border"
            placeholder="*Other Information"
            onnvalid="setCustomValidity('Please input Other Information')"
            onchange="setCustomValidity('')"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="submit-btn field_padding app-text--uppercase app-text"
        >
          send
        </button>
      </form>
    </div>
  );
};

export default Form;
