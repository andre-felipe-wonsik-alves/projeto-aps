import { Inscricao } from "../classes/Inscricao";
import { Formacao } from "../classes/Formacao";
import { Participante } from "../classes/Participante";
import pool from "../../database";

export class DaoInscricao {
    protected inscricao: Inscricao;
    protected formacao: Formacao;

    public async ler(idParticipante: number, idFormacao: number): Promise<Inscricao | null> {
        try {
            const query = `SELECT * FROM Inscricao WHERE idParticipante = $1 AND idFormacao = $2`;
            const values = [idParticipante, idFormacao];

            const result = await pool.query(query, values);

            if (result.rows.length === 0) {
                return null;
            }

            const row = result.rows[0];

            const participante = new Participante(row.idParticipante);
            const formacao = new Formacao(
                row.idFormacao,
                row.nome,
                row.cargaHoraria,
                row.maxParticipantes
            );

            return new Inscricao(participante, formacao, row.cargaHorariaParticipante);
        } catch (error) {
            console.error("Erro ao recuperar inscrição:", error);
            throw error;
        }
    }

    // Método para criar uma nova inscrição
    public async criarInscricao(inscricao: Inscricao): Promise<void> {
        try {
            const query = `INSERT INTO Inscricao (idParticipante, idFormacao, cargaHorariaParticipante) VALUES ($1, $2, $3)`;
            const values = [
                inscricao.getIdParticipanteFormacao().idParticipante,
                inscricao.getIdParticipanteFormacao().idFormacao,
                inscricao.getCargaHorariaParticipante()
            ];

            await pool.query(query, values);
            console.log(`Inscrição de idParticipante: ${inscricao.getIdParticipanteFormacao().idParticipante} e idFormacao: ${inscricao.getIdParticipanteFormacao().idFormacao} criada com sucesso!`);
        } catch (error) {
            console.error("Erro ao criar inscrição:", error);
            throw error;
        }
    }
}
