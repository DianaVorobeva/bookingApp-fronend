import axios from 'axios';

// const API = axios.create({ baseURL: process.env.REACT_APP_API });
const API = axios.create({ baseURL: 'http://localhost:7001', headers: {
    post: {
      "Access-Control-Allow-Origin": true
    }
  } });

type MailType = {
  firstname: string,
  lastname: string, 
  email: string
  };

export const sendMail = (mailData:MailType) => API.post('/sendEmail/', mailData, 
  {headers: { "Access-Control-Allow-Origin": "true"}});

