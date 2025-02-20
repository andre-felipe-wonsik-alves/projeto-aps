import { Formacao } from "../classes/Formacao";
import { DaoManager } from "../managers/DaoManager";

export class DvoInscricao {
    private daoManager: DaoManager;

    constructor(daoManager: DaoManager) {
        this.daoManager = daoManager;
    }

    validarCargaHoraria(cargaHorariaParticipante: number, idFormacao: number): boolean {
        const dao = this.daoManager.getDaoFormacao();
        const formacao = dao.retrieve(idFormacao);
        const cargaHorariaFormacao = formacao.getCargaHoraria();

        let validacao: boolean;

        if(cargaHorariaParticipante === cargaHorariaFormacao){
            validacao = true;
        } else{
            validacao = false;
        }

        return validacao;
    }
}