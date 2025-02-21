import { DaoManager } from "../managers/DaoManager";

export class DvoInscricao {
    private daoManager: DaoManager;

    constructor(daoManager: DaoManager) {
        this.daoManager = daoManager;
    }

    // Método para validar a carga horária do participante em relação à formação
    public async validarCargaHoraria(cargaHorariaParticipante: number, idFormacao: number): Promise<boolean> {
        const dao = this.daoManager.getDaoFormacao();
        const formacao = await dao.lerFormacao(idFormacao);
        const cargaHorariaFormacao = formacao.getCargaHoraria();

        // Retorna true se a carga horária do participante for igual à da formação, caso contrário, false
        return cargaHorariaParticipante === cargaHorariaFormacao;
    }
}