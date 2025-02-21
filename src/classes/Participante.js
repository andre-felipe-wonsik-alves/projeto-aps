"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participante = void 0;
var Participante = /** @class */ (function () {
    function Participante(idParticipante) {
        this.idParticipante = idParticipante;
    }
    Participante.prototype.getIdParticipante = function () {
        return this.idParticipante;
    };
    Participante.prototype.setIdParticipante = function (idParticipante) {
        this.idParticipante = idParticipante;
    };
    return Participante;
}());
exports.Participante = Participante;
