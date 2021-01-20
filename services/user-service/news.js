const axios = require('../axios');

const getNews = async (id) => {
  const data = await axios.get(`/news/${id}`);
  return data.data;
};

const getAllNews = async () => {
  const data = await axios.get(`/news`);
  return data.data;
};

module.exports = {
  getNews,
  getAllNews,
};
