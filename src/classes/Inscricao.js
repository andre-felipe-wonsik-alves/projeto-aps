"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inscricao = void 0;
var Formacao_1 = require("./Formacao");
var Inscricao = /** @class */ (function () {
    // método construtor
    function Inscricao(participante, formacao, cargaHorariaParticipante) {
        this.participante = participante;
        this.formacao = formacao;
        this.cargaHorariaParticipante = cargaHorariaParticipante;
    }
    Inscricao.prototype.getCargaHorariaParticipante = function () {
        return this.cargaHorariaParticipante;
    };
    Inscricao.prototype.getIdParticipanteFormacao = function () {
        return {
            idParticipante: this.participante.getIdParticipante(),
            idFormacao: this.formacao.getIdFormacao(),
        };
    };
    Inscricao.prototype.setCargaHorariaParticipante = function (cargaHorariaParticipante) {
        this.cargaHorariaParticipante = cargaHorariaParticipante;
    };
    Inscricao.prototype.setIdParticipanteFormacao = function (idParticipante, idFormacao) {
        this.participante.setIdParticipante(idParticipante);
        this.formacao = new Formacao_1.Formacao(idFormacao, this.formacao.getNome(), this.formacao.getCargaHoraria(), this.formacao.getMaxParticipantes());
    };
    return Inscricao;
}());
exports.Inscricao = Inscricao;
