import { useEffect, useState } from "react";
import HomeNavBar from "./components/HomeNavBar";
import ProductCards from "./components/products/ProductCards";
import productsMeliApi from "./utils/fetch";

function App() {
  const [categorie, setCategorie] = useState('');
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  const resultSearch = async (category, text) => {
    console.log(category, text)
    try {
      // const fetchApi = await axios.get(`http://localhost:3002/search?category=${category}&text=${text}`);
      const fetchApi = await productsMeliApi('GET', `search?category=${category}&text=${text}`);
      setProducts(fetchApi.results);
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    resultSearch(categorie, searchText);
  }, [categorie, searchText]);

  return (
    <div>
      <HomeNavBar categorie={setCategorie} search={setSearchText} />
      <ProductCards items={products} />
    </div>
  );
}

export default App;
