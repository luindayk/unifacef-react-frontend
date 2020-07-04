import { configs } from '../configs';
import axios from 'axios';

export const getPrice = () => {
  return axios.request({ url: configs.apis.economia });
}
