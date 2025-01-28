import { Professor } from "./Professor";

export class Participante extends Professor {

  constructor(
    protected matriculaSiape: number,
    protected cpf: string,
    protected nome: string,
    protected dataNascimento: Date,
    protected idProfessor: number,
    protected idParticipante: number
  ) {
    super(matriculaSiape, cpf, nome, dataNascimento, idProfessor);
  }

  public getIdParticipante(): number {
    return this.idParticipante;
  }

  //public getProfessorId() : number{
    //return super.getIdProfessor();
  //}

  public setIdParticipante(idParticipante: number) {
    this.idParticipante = idParticipante;
  }
}
