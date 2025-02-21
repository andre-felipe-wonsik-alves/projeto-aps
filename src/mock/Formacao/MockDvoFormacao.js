"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockDvoFormacao = void 0;
var MockDvoFormacao = /** @class */ (function () {
    function MockDvoFormacao(mockDaoFormacao) {
        this.mockDaoFormacao = mockDaoFormacao;
    }
    MockDvoFormacao.prototype.existeFormacaoSei = function (nomeFormacao, nomeLecionador) {
        var formacoes = this.mockDaoFormacao.retorneFormacoesSei();
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
    return MockDvoFormacao;
}());
exports.MockDvoFormacao = MockDvoFormacao;
