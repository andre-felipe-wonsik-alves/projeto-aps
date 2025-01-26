import { Formacao } from "./Formacao";
import { Participante } from "./Participante";


export class Inscricao {
  // método construtor
  constructor(
    protected participante: Participante,
    protected formacao: Formacao,
    protected cargaHorariaParticipante: number,
  ) {}

  public getCargaHorariaParticipante(): number {
    return this.cargaHorariaParticipante;
  }

  //public getParticipanteFormacao(): {participante: Participante; formacao: Formacao} { //seria puxar os 2, com todas suas informações
    //return {participante: this.participante, formacao: this.formacao};
  //}

  public getIdParticipanteFormacao(): {idParticipante: number, idFormacao: number} {   //usar as {} cria um objeto! 
    return {idParticipante: this.participante.getIdParticipante(), 
            idFormacao: this.formacao.getIdFormacao()};
    //chaves primárias!
  }

  public getInscricao(idParticipante: number, idFormacao: number): any{
    if (idParticipante === this.getIdParticipanteFormacao().idParticipante &&
        idFormacao === this.getIdParticipanteFormacao().idFormacao){
          return {
            idParticipanteFormacao: this.getIdParticipanteFormacao(),
            cargaHorariaParticipante: this.cargaHorariaParticipante
          };
    }
    return null;
  }

  public setCargaHorariaParticipante(cargaHorariaParticipante: number) {
    this.cargaHorariaParticipante = cargaHorariaParticipante;
  }

  public setIdParticipanteFormacao(idParticipante: number, idFormacao: number) : void {
    this.participante = new Participante(this.participante.getMatriculaSiape(), this.participante.getCpf(), this.participante.getNome(),
                                        this.participante.getDataNascimento(), this.participante.getIdProfessor(), idParticipante);

    this.formacao = new Formacao(idFormacao, this.formacao.getNome(), this.formacao.getCargaHoraria(), this.formacao.getMaxParticipantes());
  }
}
