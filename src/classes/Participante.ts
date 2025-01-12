const Professor = require("./Professor")

export class Participante extends Professor{

    // método construtor
    constructor(
        private idParticipante: number, 
        private idProfessor: number
    ){
        super()
        
        this.idProfessor = Professor.getIdProfessor();
        this.idParticipante = idParticipante;
    }

    validarCargaHoraria(){
        console.log(`{this.nome} teve sua carga validada!`)
    }

    getNomeParticipante(): number{
        return this.idParticipante;
    }
}