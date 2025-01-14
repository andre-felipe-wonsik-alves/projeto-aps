const Professor = require("./Professor");

export class Participante extends Professor {
  private idParticipante: number;

  constructor(
    matriculaSiape: number,
    cpf: string,
    nome: string,
    dataNascimento: Date,
    idProfessor: number,
    idParticipante: number
  ) {
    super(matriculaSiape, cpf, nome, dataNascimento, idProfessor);
    this.idParticipante = idParticipante;
  }

  getIdParticipante(): number {
    return this.idParticipante;
  }
}
