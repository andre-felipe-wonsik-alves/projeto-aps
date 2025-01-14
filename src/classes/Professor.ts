const ServidorUTFPR = require("./ServidorUtfpr");
// import { ServidorUTFPR } from "./ServidorUtfpr"; // ! Trocar para um DAO

export class Professor extends ServidorUTFPR {
  // método construtor
  constructor(
    matriculaSiape: number,
    cpf: string,
    nome: string,
    dataNascimento: Date,
    idProfessor: number
  ) {
    super(matriculaSiape, cpf, nome, dataNascimento);
    this.idProfessor = idProfessor;
  }

  getIdProfessor(): number {
    return this.idProfessor;
  }

  getServidorUTFPR() {
    return `MatriculaSIAPE: ${super.getMatriculaSiape()}, CPF: ${super.getCpf()},
        Nome: ${super.getNome()}, Data de Nascimento: ${super.getDataNascimento()}`;
  }
}
