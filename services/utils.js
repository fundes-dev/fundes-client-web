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
  return response;
};

const fetchData = async () => 'data fetched';

export { postData, fetchData };
