export class ServidorUTFPR {

    // definição dos atributos
    private matriculaSiape: number;
    private nome: string;
    private cpf: string;
    private dataNascimento: Date;

    // método construtor
    constructor(matriculaSiape: number, cpf: string, nome: string, dataNascimento: Date){
        this.matriculaSiape = matriculaSiape;
        this.cpf = cpf;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }

    getMatriculaSiape(): number{
        return this.matriculaSiape;
    }

    getCpf(): string{
        return this.cpf;
    }

    getNome(): string{
        return this.nome;
    }

    getDataNascimento(): Date{
        return this.dataNascimento;
    }
}

const data = new Date(2025,0,12);
var Servidor1 = new ServidorUTFPR(6969,'696969','Bill', data);