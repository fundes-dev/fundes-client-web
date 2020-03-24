import getConfig from 'next/config';
import { postData } from './utils';

const { publicRuntimeConfig: { API_HOST } } = getConfig();

const requestRegistration = (email, password, firstName, lastName) => {
  const payload = {
    email, password, firstName, lastName,
  };
  return postData(`${API_HOST}/api/user/`, payload);
};

export { requestRegistration };
