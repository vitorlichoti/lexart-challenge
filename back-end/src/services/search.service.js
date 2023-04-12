const { MeliSearch } = require('../models/');
const fetch = require('node-fetch');
const { Op } = require('sequelize');

const saveSearch = async (category, text, results) => MeliSearch.create({
  category,
  textSearch: text,
  results,
})

const findByCategoryText = async (category, text) => MeliSearch.findOne({
  where: {
    [Op.and]: [{ category }, { text_search: text }]
  },
  attributes: ['results']
});

const getResultsDB = async (category, text) => {
  const consult = await findByCategoryText(category, text);

  if (consult === null) {
    const fetchApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${category}${text}`);
    const data = await fetchApi.json();
    const stringfy = JSON.stringify(data.results)
    await saveSearch(category, text, stringfy);

    return data.results;
  }
  return JSON.parse(consult.results);
}

module.exports = { getResultsDB };