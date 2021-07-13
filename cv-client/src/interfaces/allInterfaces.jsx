import PropTypes from 'prop-types';

export const Iform = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  country: PropTypes.string,
  city: PropTypes.string,
  company: PropTypes.string,
  additionalInfo: PropTypes.string,
};
export const IformDefault = {
  name: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  company: '',
  additionalInfo: '',
};
