export class ServidorUTFPR {
    
    // definição dos atributos
    private matriculaSiape: number;
    private nome: string;
    private cpf: string;
    private dataNascimento: Date;

    // método construtor
    constructor(matriculaSiape: number, nome: string, cpf: string, dataNascimento: Date){
        this.matriculaSiape = matriculaSiape;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    getMatriculaSiape(): number{
        return this.matriculaSiape;
    }

    getNome(): string{
        return this.nome;
    }

    getCpf(): string{
        return this.cpf;
    }

    getDataNascimento(): Date{
        return this.dataNascimento;
    }
}

const data = new Date(2025,0,12);
const Servidor1 = new ServidorUTFPR(6969, 'Bill', '6969696', data);