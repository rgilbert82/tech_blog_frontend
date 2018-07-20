export default (conversationId) => {
  return new Promise((resolve, reject) => {
    const path    = `${process.env.VUE_APP_API_URL}/conversations/${conversationId}/comments`;
    const request = new XMLHttpRequest();

    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject(request.responseText);
        }
      }
    }

    request.open('GET', path);
    request.send();
  });
};
