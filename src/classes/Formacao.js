"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formacao = void 0;
var Formacao = /** @class */ (function () {
    function Formacao(idFormacao, nome, cargaHoraria, maxParticipantes) {
        this.idFormacao = idFormacao;
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.maxParticipantes = maxParticipantes;
    }
    Formacao.prototype.getIdFormacao = function () {
        return this.idFormacao;
    };
    Formacao.prototype.getNome = function () {
        return this.nome;
    };
    Formacao.prototype.getCargaHoraria = function () {
        return this.cargaHoraria;
    };
    Formacao.prototype.getMaxParticipantes = function () {
        return this.maxParticipantes;
    };
    Formacao.prototype.setId = function (idFormacao) {
        this.idFormacao = idFormacao;
    };
    Formacao.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Formacao.prototype.setCargaHoraria = function (cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    };
    Formacao.prototype.setMaxParticipantes = function (maxParticipantes) {
        this.maxParticipantes = maxParticipantes;
    };
    return Formacao;
}());
exports.Formacao = Formacao;
