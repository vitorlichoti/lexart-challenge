import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST || "localhost:3002";
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || "http";

const productsMeliApi = async (endpoint) => {
  const res = await axios.get(`${PROTOCOL}://${HOST}/${endpoint}`);
  return res
}
export default productsMeliApi