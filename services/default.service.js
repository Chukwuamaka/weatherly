export const postRequest = (url, data) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    });
};

export const getRequest = (url) => {
  return fetch(url);
};