import Axios from 'axios';

export * from 'axios';

const axios = Axios.create({ withCredentials: false });

axios.interceptors.response.use(
  response => response,
  err => {
    throw err;
    // const { data } = err.response;
    // const message = data && data.message ? data.message : 'Unhandled server errorrr!';

    // throw new Error(`${message}`);
  }
);

export default axios;
