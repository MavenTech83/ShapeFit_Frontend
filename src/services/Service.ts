import axios from "axios";

const api = axios.create({
  baseURL: "https://shape-fit.onrender.com"
});
  
// Função para consultar
export const buscar = async (url: string, setDados: Function) => {
  try {
      const resposta = await api.get(url);
      // Se a requisição for bem-sucedida, preenche o estado com os dados.
      setDados(resposta.data);
  } catch (error) {
      // Se a requisição falhar (4xx, 5xx), forçamos o estado a ser um array vazio.
      // Isso previne o erro 'categorias.map is not a function'.
      setDados([]); 
      //MANTEMOS o console.error para o desenvolvedor ver o erro no console!
      console.error('Erro na requisição de busca:', error); 
  }
};
  
  // Função para cadastrar
  export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    // A chamada POST deve usar 'api.post' que já tem o baseURL configurado.
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

  // Função para atualizar 
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados);
    setDados(resposta.data);
  }
  
  // Função para deletar 
  export const deletar = async (url: string) => {
    await api.delete(url);
  }