const axios = require('axios').default;

// const serverURL = new URL({});
// serverURL.hostname = process.env.JSON_SERVER_HOSTNAME;
// serverURL.port = process.env.JSON_SERVER_PORT;

// console.log(serverURL.toString());

const serverURL = `http://${process.env.JSON_SERVER_HOSTNAME}:${process.env.JSON_SERVER_PORT}`;
console.log('serverURL', serverURL);

const a = axios.create({
  baseURL: serverURL,
});

module.exports = a;
