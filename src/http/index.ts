import axios, { AxiosError } from "axios";
import { useObterToken } from "../shared/hooks/token";
import { history } from "../App";


const http = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})

http.interceptors.request.use(function (config) {
    // Faz alguma coisa antes da requisição ser enviada
    const token = useObterToken()
    if(token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  }, function (error) {
    // Faz alguma coisa com o erro da requisição
    console.log('Erro no interceptador do axios.')
    return Promise.reject(error);
  });

  http.interceptors.response.use(function (response) {
    // Qualquer código de status que dentro do limite de 2xx faz com que está função seja acionada
    // Faz alguma coisa com os dados de resposta
    return response;
  }, function (error: AxiosError) {
    // Qualquer código de status que não esteja no limite do código 2xx faz com que está função seja acionada
    // Faz alguma coisa com o erro da resposta
    if(error.response?.status === 401) {
        history.push('/')
    }
    return Promise.reject(error);
  });

export default http