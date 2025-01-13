const Professor = require("./Professor")
// import { Professor } from "./Professor"

export class Participante extends Professor{
    
    // método construtor
    // ? usado no trampo, talvez seja melhor:
    // ? import { ViewService } from "./view.service";
    // ? public viewService: ViewService,

    constructor(
        private idParticipante: number, 
        private idProfessor: number,
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
