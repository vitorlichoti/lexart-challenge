import { useEffect, useState } from "react";
import HomeNavBar from "./components/HomeNavBar";
import ProductCards from "./components/products/ProductCards";
import { handleSearch } from "./service/api-meli";

function App() {
  const [categorie, setCategorie] = useState('');
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  const resultSearch = async (text) => {
    const fetchApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${text}`);
    const response = await fetchApi.json();
    setProducts(response.results);
  }

  useEffect(() => {
    const searchParam = categorie + searchText
    resultSearch(searchParam);
  }, [categorie, searchText]);

  return (
    <div>
      <HomeNavBar categorie={setCategorie} search={setSearchText} />
      <ProductCards items={products} />
    </div>
  );
}

export default App;
