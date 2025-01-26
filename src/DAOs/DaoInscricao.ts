import { DaoGenerico } from "./DaoGenerico"; // Importando o DAOGenérico
import { Inscricao } from "../classes/Inscricao"; // Importando a classe Inscricao
import { Formacao } from "../classes/Formacao";
import pool from "../../database";

// Criando a classe DAOParticipante que usa o DAOGenerico com Inscricao
export class DaoInscricao extends DaoGenerico<Inscricao> {
    protected inscricao: Inscricao;
    protected formacao: Formacao;

    public consultarInscricao(idParticipante: number, idFormacao: number): any {
        const inscricoes = this.inscricao.getInscricao(idParticipante, idFormacao);
        return inscricoes;
    }

    // *  public async getInscricao(idParticipante, idFormacao): Promise<Inscricao> {
    // *    const query = `SELECT FROM Inscricao WHERE Inscricao.idParticipante == ${idParticipante} AND Inscricao.idFormacao == ${idFormacao}`;
    // *
    // *    const result = await pool.query(query);
    // *    return result;
    // *  }

    public validarCargaHoraria(cargaHorariaParticipante: number): string {
        cargaHorariaParticipante = this.inscricao.getCargaHorariaParticipante();
        let validacao: string;
        if (cargaHorariaParticipante === this.formacao.getCargaHoraria()) {
            validacao = "Carga Horária Validada";
        } else {
            validacao = "Carga Horária Não Validada";
        }

        return validacao;
    }
}
