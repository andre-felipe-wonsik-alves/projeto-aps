
class Participante {
    // definição dos atributos
    private nome: string;

    // método construtor
    constructor(nome: string){
        this.nome = nome;
    }

    validarCargaHoraria(){
        console.log(`{this.nome} teve sua carga validada!`)
    }

    getNomeParticipante(): string{
        return this.nome
    }
}


const p1 = new Participante("andre");
let p2 = new Participante("felipe");

p1.validarCargaHoraria()
p2.validarCargaHoraria()