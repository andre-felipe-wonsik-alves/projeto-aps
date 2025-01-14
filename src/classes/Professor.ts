const ServidorUTFPR = require("./ServidorUtfpr")

export class Professor extends ServidorUTFPR {
    // definição dos atributos
    private idProfessor: number;

    // método construtor
    constructor(matriculaSiape: number, nome: string, cpf: string, dataNascimento: Date, idProfessor: number) {
        super(matriculaSiape, nome, cpf, dataNascimento);
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

const Professor1 = new Professor(ServidorUTFPR.getMatriculaSiape(), ServidorUTFPR.getCpf(), ServidorUTFPR.getNome(), 
ServidorUTFPR.getDataNascimento(), 3678);