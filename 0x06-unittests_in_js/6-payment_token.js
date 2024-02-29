const getPaymentTokenFromAPI = (success) => {
  const res = { data: 'Successful response from the API' };
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(res);
    }
  });
};

module.exports = getPaymentTokenFromAPI;