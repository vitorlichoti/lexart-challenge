import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST || "localhost";
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || "http";

const productsMeliApi = async (method, endpoint) => {
  try {
    return await axios[method](`${PROTOCOL}://${HOST}/${endpoint}`);
  } catch (error) {
    return error.message;
  }
}
export default productsMeliApi