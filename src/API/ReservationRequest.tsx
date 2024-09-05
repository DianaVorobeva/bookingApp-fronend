import axios from 'axios';

// const API = axios.create({ baseURL: process.env.REACT_APP_API });
const API = axios.create({ baseURL: 'http://localhost:7001', headers: {
    post: {
      "Access-Control-Allow-Origin": true
    }
  } });

type OptionsType = {
  houseId: number,  
  startDate: string,
  endDate: string,
  numberPersons: number,
  firstname: string,
  lastname: string, 
  email: string,
  phone: string
  };
export const makeHouseReservation = (data:OptionsType) => API.post('/reservation/', data, 
  {headers: { "Access-Control-Allow-Origin": "true"}});
