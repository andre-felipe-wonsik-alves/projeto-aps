import { DaoGenerico } from './DaoGenerico'; // Importando o DAOGenérico
import { Inscricao } from '../classes/Inscricao'; // Importando a classe Inscricao
import { Formacao } from '../classes/Formacao';
import { Participante } from '../classes/Participante';

// Criando a classe DAOParticipante que usa o DAOGenerico com Inscricao
export class DaoInscricao extends DaoGenerico<Inscricao> {
    protected inscricao: Inscricao;
    protected formacao: Formacao;

    public consultarInscricao(idParticipante: number): any {
        this.encontrarPorId(idParticipante);

        return {idParticipanteFormacao: this.inscricao.getIdParticipanteFormacao(), 
            cargaHorariaParticipante: this.inscricao.getCargaHorariaParticipante()};
    }

    public validarCargaHoraria(): string{
        let validacao: string;
        if(this.inscricao.getCargaHorariaParticipante() === this.formacao.getCargaHoraria()){
            validacao = 'Carga Horária Validada';
        }
        else{
            validacao = 'Carga Horária Não Validada';
        }

        return validacao;
    } //não ta pronto ainda!
}