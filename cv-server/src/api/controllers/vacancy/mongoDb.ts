import { Schema, model } from 'mongoose';

const schema = new Schema({
  city_title: { type: String, requared: true },
  active: { type: Boolean, requared: true },
  vacancies: [
    {
      link_name: { type: String, required: true },
      title: { type: String, required: true },
      id: { type: String, requarid: true },
    },
  ],
});

export default model('MongeVacancy', schema);
