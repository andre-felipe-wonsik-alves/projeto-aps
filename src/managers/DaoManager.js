"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaoManager = void 0;
var DaoFormacao_1 = require("../DAOs/DaoFormacao");
var DaoInscricao_1 = require("../DAOs/DaoInscricao");
var DaoManager = /** @class */ (function () {
    function DaoManager() {
    }
    /**
     * name
     */
    DaoManager.prototype.getDaoFormacao = function () {
        return new DaoFormacao_1.DaoFormacao();
    };
    DaoManager.prototype.getDaoInscricao = function () {
        return new DaoInscricao_1.DaoInscricao();
    };
    return DaoManager;
}());
exports.DaoManager = DaoManager;
