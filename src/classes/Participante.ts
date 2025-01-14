const Professor = require("./Professor")
// import { Professor } from "./Professor"

//import { Professor } from "./Professor";

export class Participante extends Professor{
    private idParticipante: number;

    // método construtor
<<<<<<< HEAD
    // ? usado no trampo, talvez seja melhor:
    // ? import { ViewService } from "./view.service";
    // ? public viewService: ViewService,

    constructor(
        private idParticipante: number, 
        private idProfessor: number,
    ){
        super()
        
        this.idProfessor = Professor.getIdProfessor();
=======
    // import { ViewService } from "./view.service";
    // public viewService: ViewService,
    constructor(matriculaSiape: number, cpf: string, nome: string, dataNascimento: Date, idProfessor: number, idParticipante: number) {
        super(matriculaSiape, cpf, nome, dataNascimento, idProfessor);
        //this.idProfessor = Professor.getIdProfessor();
>>>>>>> Sigma
        this.idParticipante = idParticipante;
    }

    getIdParticipante(): number{
        return this.idParticipante;
    }

}

//const Participante1 = new Participante(Professor.getMatriculaSiape(), Professor.getCpf(), Professor.getNome(), Professor.getDataNascimento(), Professor.getIdProfessor(), 69);
//export default Participante1;