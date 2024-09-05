import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:7001' });

interface IFormData {
    startDate: string, 
    endDate: string, 
    numberPersons: number
}

export const filterHouses = (RequestOptions:IFormData) => API.post('/filter/', RequestOptions);
