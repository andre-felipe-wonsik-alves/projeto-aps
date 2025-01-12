const Professor = require("./Professor")

export class Participante extends Professor{
    // definição dos atributos
    private idParticipante: number;

    // método construtor
    constructor(idParticipante: number){
        // super(Professor1.getIdProfessor());
        super()
        this.professor = Professor.getIdProfessor();

        this.idParticipante = idParticipante;
    }

    validarCargaHoraria(){
        console.log(`{this.nome} teve sua carga validada!`)
    }

    getNomeParticipante(): number{
        return this.idParticipante;
    }
}