const axios = require('axios').default;

// const serverURL = new URL({});
// serverURL.hostname = process.env.JSON_SERVER_HOSTNAME;
// serverURL.port = process.env.JSON_SERVER_PORT;

// console.log(serverURL.toString());

const serverURL = `http://${process.env.JSON_SERVER_HOSTNAME || 'localhost'}:${process.env.JSON_SERVER_PORT || 3001}`;

console.log('serverURL', serverURL);

module.exports = axios.create({
  baseURL: serverURL,
});
