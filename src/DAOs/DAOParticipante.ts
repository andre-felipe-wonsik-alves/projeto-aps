<<<<<<< HEAD
<<<<<<< Updated upstream
import { DAOGenerico } from './DAOGenerico'; // Importando o DAOGenérico
import { Participante } from '../classes/Participante'; // Importando a classe Participante

// Criando a classe DAOParticipante que usa o DAOGenerico com Participante
export class DAOParticipante extends DAOGenerico<Participante> {

=======
import { DaoGenerico } from "./DaoGenerico"; // Importando o DAOGenérico
import { Participante } from "../classes/Participante"; // Importando a classe Participante

// Criando a classe DAOParticipante que usa o DAOGenerico com Participante
export class DAOParticipante extends DaoGenerico<Participante> {
>>>>>>> Stashed changes
=======
import { DAOGenerico } from "./DaoGenerico"; // Importando o DAOGenérico
import { Participante } from "../classes/Participante"; // Importando a classe Participante

// Criando a classe DAOParticipante que usa o DAOGenerico com Participante
export class DAOParticipante extends DAOGenerico<Participante> {
>>>>>>> main
  // Método específico para encontrar o Participante pelo idParticipante
  findByIdParticipante(idParticipante: number): Participante | null {
    return (
      this.dados.find((item) => item.getIdParticipante() === idParticipante) ||
      null
    );
  }

  //daria pra fazer outros métodos como listar todos os Participantes, etc
}
