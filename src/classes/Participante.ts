const Professor = require("./Professor")

export class Participante extends Professor{
    private idParticipante: number;

    // método construtor
    // import { ViewService } from "./view.service";
    // public viewService: ViewService,
    constructor(matriculaSiape: number, nome: string, cpf: string, dataNascimento: Date, idProfessor: number, idParticipante: number) {
        super(matriculaSiape, nome, cpf, dataNascimento, idProfessor);
        //this.idProfessor = Professor.getIdProfessor();
        this.idParticipante = idParticipante;
    }

    validarCargaHoraria(){
        console.log(`{this.nome} teve sua carga validada!`)
    }

    getNomeParticipante(): number{
        return this.idParticipante;
    }
}
