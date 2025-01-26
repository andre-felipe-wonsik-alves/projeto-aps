import { ServidorUTFPR } from "./ServidorUtfpr"; // ! Trocar para um DAO

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

  //public getServidorUTFPRMatriculaSiape(): number {
  //  return super.getMatriculaSiape();
  //}

  //public getServidorUTFPRCpf(): string {
    //return super.getCpf();
  //}

  //public getServidorUTFPRNome(): string {
    //return super.getNome();
  //}

  //public getServidorUTFPRDataNascimento(): Date {
    //return super.getDataNascimento();
  //}

  public setIdProfessor(idProfessor: number){
    this.idProfessor = idProfessor;
  }
}
