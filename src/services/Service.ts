import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});
  
// Função para consultar
export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url);
    setDados(resposta.data);
  }
  
  // Função para cadastrar
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
  }

  // Função para atualizar 
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados);
    setDados(resposta.data);
  }
  
  // Função para deletar 
  export const deletar = async (url: string) => {
    await api.delete(url);
  }