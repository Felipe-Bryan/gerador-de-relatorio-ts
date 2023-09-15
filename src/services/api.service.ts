import axios from 'axios';
import { CreateVendaParams } from '../types/CreateVendaParams';

const api = axios.create({
  baseURL: 'http://localhost:3333/vendas',
});

export const createVendaApi = (params: CreateVendaParams) => {
  api.post('/', params).then((res) => {
    console.log(res.data.data);

    return res.data.data;
  });
};
