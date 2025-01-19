import { Formacao } from "./Formacao";
import { Participante } from "./Participante";

export class Inscricao {
  // definição dos atributos
  private idParticipante: number;
  private idFormacao: number;
  private cargaHorariaParticipante: number;
  private cargaHorariaFormacao: number;

  // método construtor
  //   ! rever o acesso de dados na classe
  constructor(
    cargaHorariaParticipante: number,
    formacao: Formacao,
    daoParticipante: Participante
  ) {
    this.idParticipante = daoParticipante.getIdParticipante();
    this.idFormacao = formacao.getIdFormacao();
    this.cargaHorariaParticipante = cargaHorariaParticipante;
    this.cargaHorariaFormacao = formacao.getCargaHoraria();
  }

  getCargaHorariaParticipante(): number {
    return this.cargaHorariaParticipante;
  }

  validarCargaHoraria() {
    if (this.cargaHorariaParticipante == this.cargaHorariaFormacao) {
      console.log(`{this.nome} teve sua carga validada!`);
    }
  }
}
