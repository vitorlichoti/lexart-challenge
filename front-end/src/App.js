import { useEffect, useState } from "react";
import HomeNavBar from "./components/HomeNavBar";
import ProductCards from "./components/products/ProductCards";
import productsMeliApi from "./utils/fetch";

function App() {
  const [categorie, setCategorie] = useState('');
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  const resultSearch = async (category, text) => {
    try {
      if (category === 'Limpar Tela') {
        return setProducts([])
      }
      const fetchApi = await productsMeliApi(`search?category=${category}&text=${text}`);
      setProducts(fetchApi.data);
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
