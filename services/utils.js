import fetch from 'isomorphic-unfetch';

const postData = async (endpoint, payLoad) => {
  const rawResponse = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payLoad),
  });
  const response = await rawResponse.json();
  return { status: rawResponse.status, body: response };
};

const fetchData = async (endpoint) => {
  const rawResponse = await fetch(endpoint, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const response = await rawResponse.json();
  return { status: rawResponse.status, body: response };
};

export { postData, fetchData };
