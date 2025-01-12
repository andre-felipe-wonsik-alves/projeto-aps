const ServidorUTFPR = require("./ServidorUtfpr")

export class Professor extends ServidorUTFPR {
    // definição dos atributos
    private idProfessor: number;

    // método construtor
    constructor(idProfessor: number) {
        super(Servidor1.getMatriculaSiape(), Servidor1.getNome(), Servidor1.getCpf(), Servidor1.getDataNascimento());

        this.idProfessor = idProfessor;
    }

    getIdProfessor(): number {
        return this.idProfessor;
    }
}

const Professor1 = new Professor(3678);