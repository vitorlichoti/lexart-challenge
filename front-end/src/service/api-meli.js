export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestJson = await request.json();
  return requestJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const requestQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const requestJson = await requestQuery.json();
  return requestJson;
}

export const handleSearch = async (event) => {
  event.preventDefault();

  const { inputText } = this.state;
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${inputText}`;
  const fetchApi = await fetch(URL);
  const response = await fetchApi.json();
  const data = response.results;
  this.setState({
    products: data,
    searchVerify: !data.length > 0,
    sortBy: 'default',
  });
};