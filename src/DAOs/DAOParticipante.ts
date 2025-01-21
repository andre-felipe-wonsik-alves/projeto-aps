import { DAOGenerico } from "./DaoGenerico"; // Importando o DAOGenérico
import { Participante } from "../classes/Participante"; // Importando a classe Participante

// Criando a classe DAOParticipante que usa o DAOGenerico com Participante
export class DAOParticipante extends DAOGenerico<Participante> {
  // Método específico para encontrar o Participante pelo idParticipante
  findByIdParticipante(idParticipante: number): Participante | null {
    return (
      this.dados.find((item) => item.getIdParticipante() === idParticipante) ||
      null
    );
  }

  //daria pra fazer outros métodos como listar todos os Participantes, etc
}
