import { Formacao } from "./Formacao";
import { Participante } from "./Participante";

//import Formacao1 from "./Formacao";
//import Participante1 from "./Participante";

const F1 = new Formacao(1, 'Sigma', 69, 30);

const data = new Date(2025,0,12);
const P1 = new Participante(6969,'696969','Bill', data, 3678, 11);

export class Inscricao {
    // definição dos atributos
    private idParticipante: number;
    private idFormacao: number;
    private cargaHorariaParticipante: number;

    // método construtor
    constructor(idParticipante: number, idFormacao: number, cargaHorariaParticipante: number){
        this.idParticipante = P1.getIdParticipante();
        this.idFormacao = F1.getId();
        this.cargaHorariaParticipante = cargaHorariaParticipante;
    }

    getCargaHorariaParticipante(): number{
        return this.cargaHorariaParticipante;
    }

    validarCargaHoraria(){
        if(this.cargaHorariaParticipante == F1.getCargaHoraria()){
            console.log(`{this.nome} teve sua carga validada!`)
        }
    }
}