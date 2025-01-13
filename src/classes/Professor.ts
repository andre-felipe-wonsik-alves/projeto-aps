// const ServidorUTFPR = require("./ServidorUtfpr")
import { ServidorUTFPR } from "./ServidorUtfpr"; // ! Trocar para um DAO

export class Professor extends ServidorUTFPR {
  // método construtor
  constructor(private idProfessor: number, daoServidor: ServidorUTFPR) {
    super(
      daoServidor.getMatriculaSiape(),
      daoServidor.getNome(),
      daoServidor.getCpf(),
      daoServidor.getDataNascimento()
    );
  }

  getIdProfessor(): number {
    return this.idProfessor;
  }
}
