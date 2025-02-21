"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
var ServidorUtfpr_1 = require("./ServidorUtfpr");
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    // método construtor
    function Professor(matriculaSiape, cpf, nome, dataNascimento, idProfessor) {
        var _this = _super.call(this, matriculaSiape, cpf, nome, dataNascimento) || this;
        _this.matriculaSiape = matriculaSiape;
        _this.cpf = cpf;
        _this.nome = nome;
        _this.dataNascimento = dataNascimento;
        _this.idProfessor = idProfessor;
        return _this;
    }
    Professor.prototype.getIdProfessor = function () {
        return this.idProfessor;
    };
    Professor.prototype.setIdProfessor = function (idProfessor) {
        this.idProfessor = idProfessor;
    };
    return Professor;
}(ServidorUtfpr_1.ServidorUTFPR));
exports.Professor = Professor;
