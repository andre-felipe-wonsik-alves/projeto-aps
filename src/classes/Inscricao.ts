import { Formacao } from "./Formacao";
import { Participante } from "./Participante";

export class Inscricao {
  // método construtor
  constructor(
    protected participante: Participante,
    protected formacao: Formacao,
    protected cargaHorariaParticipante: number
  ) {}

  public getCargaHorariaParticipante(): number {
    return this.cargaHorariaParticipante;
  }

  public getIdParticipanteFormacao(): {
    idParticipante: number;
    idFormacao: number;
  } {
    return {
      idParticipante: this.participante.getIdParticipante(),
      idFormacao: this.formacao.getIdFormacao(),
    };
  }

  public setCargaHorariaParticipante(cargaHorariaParticipante: number) {
    this.cargaHorariaParticipante = cargaHorariaParticipante;
  }

  public setIdParticipanteFormacao(
    idParticipante: number,
    idFormacao: number
  ): void {
    this.participante.setIdParticipante(idParticipante);
    this.formacao = new Formacao(
      idFormacao,
      this.formacao.getNome(),
      this.formacao.getCargaHoraria(),
      this.formacao.getMaxParticipantes()
    );
  }
}