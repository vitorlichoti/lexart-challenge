import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST || "localhost";
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || "http";

const productsMeliApi = async (method, endpoint) => axios[method](`${PROTOCOL}://${HOST}`);
export default productsMeliApi