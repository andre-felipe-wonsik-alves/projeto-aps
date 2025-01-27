<<<<<<< HEAD
import { DaoGenerico } from "./DaoGenerico"; // Importando o DAOGenérico
import { Participante } from "../classes/Participante"; // Importando a classe Participante

// Criando a classe DAOParticipante que usa o DAOGenerico com Participante
export class DAOParticipante extends DaoGenerico<Participante> {
=======
import { DaoGenerico } from './DaoGenerico'; // Importando o DAOGenérico
import { Participante } from '../classes/Participante'; // Importando a classe Participante

// Criando a classe DAOParticipante que usa o DAOGenerico com Participante
export class DaoParticipante extends DaoGenerico<Participante> {
  
>>>>>>> Sigma
  // Método específico para encontrar o Participante pelo idParticipante
  public encontrarPorIdParticipante(idParticipante: number): Participante | null {
    return (this.dados.find((item) => item.getIdParticipante() === idParticipante) || null);
  }

  //daria pra fazer outros métodos como listar todos os Participantes, etc
}
