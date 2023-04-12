const { getResultsDB } = require('../services/search.service');

const getResults = async (req, res) => {
  const { category, text } = req.query;

  try {
    const result = await getResultsDB(category, text);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = { getResults }