import { DaoGenerico } from "./DaoGenerico"; // Importando o DAOGenérico
import { Inscricao } from "../classes/Inscricao"; // Importando a classe Inscricao
import { Formacao } from "../classes/Formacao";
import { Participante } from "../classes/Participante";
import pool from "../../database";

// Criando a classe DAOParticipante que usa o DAOGenerico com Inscricao
export class DaoInscricao extends DaoGenerico<Inscricao> {
  protected inscricao: Inscricao;
  protected formacao: Formacao;

  public consultarInscricao(idParticipante: number, idFormacao: number): any {
    this.encontrarPorId(idParticipante); // * Nada recebe o retorno da funcao aqui sigma
    // ! Nesse caso, seria preciso uma variavel, tipo: const inscricao = this.encontrarPorId(idParticipante)

    // ? Mesmo assim, acho que nao funciona hehehe, eu faria algo do tipo:
    // * const inscricao = this.getInscricao(idParticipante, idFormacao);
    // * return {inscricao.getCargaHorariaParticipante() ... outras coisas, se precisar}

    return {
      idParticipanteFormacao: this.inscricao.getIdParticipanteFormacao(),
      cargaHorariaParticipante: this.inscricao.getCargaHorariaParticipante(),
    };
  }

  // *  public async getInscricao(idParticipante, idFormacao): Promise<Inscricao> {
  // *    const query = `SELECT FROM Inscricao WHERE Inscricao.idParticipante == ${idParticipante} AND Inscricao.idFormacao == ${idFormacao}`;
  // *
  // *    const result = await pool.query(query);
  // *    return result;
  // *  }

  public validarCargaHoraria(): string {
    let validacao: string;
    if (
      this.inscricao.getCargaHorariaParticipante() ===
      this.formacao.getCargaHoraria()
    ) {
      validacao = "Carga Horária Validada";
    } else {
      validacao = "Carga Horária Não Validada";
    }

    return validacao;
  } //não ta pronto ainda!
}
