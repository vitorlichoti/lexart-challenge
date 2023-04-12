import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST || "localhost";
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || "http";

const fetch = axios.create({
  baseURL: `${PROTOCOL}://${HOST}`,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const productsMeliApi = async (method, endpoint) => fetch
  .request({ method, url: endpoint })
  .then(({ status, data }) => ({ status, data }));

export default productsMeliApi