import { Inscricao } from "../../classes/Inscricao";

export class MockDaoInscricao {
    private inscricoes: Inscricao[] = [];

    // Método para consultar inscrição
    public async ler(idParticipante: number, idFormacao: number): Promise<Inscricao | null> {
        const inscricao = this.inscricoes.find(
            (inscricao) =>
                inscricao.getIdParticipanteFormacao().idParticipante === idParticipante &&
                inscricao.getIdParticipanteFormacao().idFormacao === idFormacao
        );
        return inscricao ? inscricao : null;
    }

    // Método para criar uma nova inscrição
    public async criarInscricao(inscricao: Inscricao): Promise<void> {
        this.inscricoes.push(inscricao);
        console.log(`Inscrição de idParticipante: ${inscricao.getIdParticipanteFormacao().idParticipante} e idFormacao: ${inscricao.getIdParticipanteFormacao().idFormacao} criada com sucesso!`);
    }
}