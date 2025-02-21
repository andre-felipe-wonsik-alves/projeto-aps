import { ServidorUTFPR } from "./ServidorUtfpr"; 

export class Professor extends ServidorUTFPR {
  // método construtor
  constructor(
    protected matriculaSiape: number,
    protected cpf: string,
    protected nome: string,
    protected dataNascimento: Date,
    protected idProfessor: number
  ) {
    super(matriculaSiape, cpf, nome, dataNascimento);
  }

  public getIdProfessor(): number {
    return this.idProfessor;
  }

  public setIdProfessor(idProfessor: number){
    this.idProfessor = idProfessor;
  }
}
