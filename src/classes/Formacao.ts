
export class Formacao{
    constructor(
        private idFormacao: number,
        private nome: string,
        private cargaHoraria: number,
        private maxParticipantes: number,
    ){
        this.idFormacao = idFormacao;
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.maxParticipantes = maxParticipantes;

    }

    desatrelarFormacao(){
        
    }

    getIdFormacao(): number{
        return this.idFormacao;
    }

    getNome(): string{
        return this.nome;
    }

    getCargaHoraria(): number{
        return this.cargaHoraria;
    }

    getMaxParticipantes(): number{
        return this.maxParticipantes;
    }
}

//const Formacao1 = new Formacao(1, 'Sigma', 69, 30);
//export default Formacao1;