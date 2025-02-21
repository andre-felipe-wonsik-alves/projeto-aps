export class ServidorUTFPR {
    // método construtor
    constructor(
        protected matriculaSiape: number, 
        protected cpf: string, 
        protected nome: string, 
        protected dataNascimento: Date
    ) {}

    public getMatriculaSiape(): number {
        return this.matriculaSiape;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getNome(): string {
        return this.nome;
    }

    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    public setMatriculaSiape(matriculaSiape: number) {
        this.matriculaSiape = matriculaSiape;
    }

    public setCpf(cpf: string) {
        this.cpf = cpf;
    }

    public setNome(nome: string) {
        this.nome = nome;
    }

    public setDataNascimento(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }

}