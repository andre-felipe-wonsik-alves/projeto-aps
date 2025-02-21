"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DvoFormacao = void 0;
var DvoFormacao = /** @class */ (function () {
    function DvoFormacao(daoFormacao) {
        this.daoFormacao = daoFormacao;
    }
    DvoFormacao.prototype.existeFormacaoSei = function (nomeFormacao, nomeLecionador) {
        var formacoes = this.daoFormacao.lerFormacoesSei();
        if (!formacoes.status)
            return { exists: "error" }; // ? Caso haja erro na requisição
        for (var campoFormacao in formacoes) {
            if ((campoFormacao == "name" || campoFormacao == "owner") &&
                (formacoes[campoFormacao] == nomeFormacao ||
                    formacoes[campoFormacao] == nomeLecionador)) {
                return { exists: true, data: formacoes }; // ? Caso já exista a formação no SEI
            }
        }
        return { exists: false, data: formacoes }; // ? Não existe no SEI
    };
    return DvoFormacao;
}());
exports.DvoFormacao = DvoFormacao;
