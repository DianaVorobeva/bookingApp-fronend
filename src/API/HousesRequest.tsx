import axios from 'axios';

// const API = axios.create({ baseURL: process.env.REACT_APP_API });
const API = axios.create({ baseURL: 'http://localhost:7001', headers: {
    post: {
      "Access-Control-Allow-Origin": true
    }
  } });


export const getAllHouses = () => API.get('/houses/', {headers: { "Access-Control-Allow-Origin": "true"}});
export const getOneHouse = (id:string) => API.get(`/houses/${id}`);