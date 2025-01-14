// const ServidorUTFPR = require("./ServidorUtfpr")
import { ServidorUTFPR } from "./ServidorUtfpr"; // ! Trocar para um DAO

//import { ServidorUTFPR } from "./ServidorUtfpr";

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

<<<<<<< HEAD
  getIdProfessor(): number {
    return this.idProfessor;
  }
}
=======
    // método construtor
    constructor(matriculaSiape: number, cpf: string, nome: string, dataNascimento: Date, idProfessor: number) {
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

//const Professor1 = new Professor(ServidorUTFPR.getMatriculaSiape(), ServidorUTFPR.getCpf(), ServidorUTFPR.getNome(), 
//ServidorUTFPR.getDataNascimento(), 3678);
>>>>>>> Sigma
