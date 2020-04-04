import getConfig from 'next/config';
import { postData, fetchData } from './utils';

const { publicRuntimeConfig: { API_HOST } } = getConfig();

export const requestRegistration = (email, password, firstName, lastName) => {
  const payload = {
    email, password, firstName, lastName,
  };
  return postData(`${API_HOST}/api/user/`, payload);
};

export const requestPackage = (name) => fetchData(`${API_HOST}/api/package?name=${name}`);
