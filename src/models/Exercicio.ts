import type Categoria from "./Categoria"; // Importação mantida

export default interface Exercicio {
    id: number;
    nome: string; // Ex: "Agachamento Livre"
    descricao: string; // Detalhe técnico do exercício
    linkVideo?: string; 

    categoria: Categoria; 
}
