import axios from 'axios';

export const getPrice = () => {
  return axios.get('https://economia.awesomeapi.com.br/json/all');
}
