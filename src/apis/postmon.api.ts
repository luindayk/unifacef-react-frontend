import axios from 'axios';
import { configs } from "../configs";

const baseURL = configs.apis.postmon;

export interface EstadoInfo {
  area_km2: string;
  codigo_ibge: string;
  nome: string;
}

export interface CidadeInfo {
  area_km2: string;
  codigo_ibge: string;
}

export interface AddressInfo {
  bairro: string;
  cidade: string;
  estado_info: EstadoInfo;
  cep: string;
  cidade_info: CidadeInfo;
  estado: string;
}

export const getAddress = async (cep: number) => {
  const request = await axios.request({
    baseURL,
    url: `cep/${cep}`
  });

  if (request.status !== 200) {
    throw new Error("Cep não encontrado");
  }
  return request;
}