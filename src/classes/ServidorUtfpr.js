"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServidorUTFPR = void 0;
var ServidorUTFPR = /** @class */ (function () {
    // método construtor
    function ServidorUTFPR(matriculaSiape, cpf, nome, dataNascimento) {
        this.matriculaSiape = matriculaSiape;
        this.cpf = cpf;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }
    ServidorUTFPR.prototype.getMatriculaSiape = function () {
        return this.matriculaSiape;
    };
    ServidorUTFPR.prototype.getCpf = function () {
        return this.cpf;
    };
    ServidorUTFPR.prototype.getNome = function () {
        return this.nome;
    };
    ServidorUTFPR.prototype.getDataNascimento = function () {
        return this.dataNascimento;
    };
    ServidorUTFPR.prototype.setMatriculaSiape = function (matriculaSiape) {
        this.matriculaSiape = matriculaSiape;
    };
    ServidorUTFPR.prototype.setCpf = function (cpf) {
        this.cpf = cpf;
    };
    ServidorUTFPR.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    ServidorUTFPR.prototype.setDataNascimento = function (dataNascimento) {
        this.dataNascimento = dataNascimento;
    };
    return ServidorUTFPR;
}());
exports.ServidorUTFPR = ServidorUTFPR;
