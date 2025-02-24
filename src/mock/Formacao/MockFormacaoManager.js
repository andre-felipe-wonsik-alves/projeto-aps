"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockFormacaoManager = void 0;
var MockFormacaoManager = /** @class */ (function () {
    function MockFormacaoManager(mockDaoFormacao, dvoFormacao) {
        this.mockDaoFormacao = mockDaoFormacao;
        this.dvoFormacao = dvoFormacao;
    }
    MockFormacaoManager.prototype.desatrelarFormacao = function (nomeFormacao, nomeLecionador) {
        // * << Pedagogo dispara o gatilho que apaga uma formação do sistema >>
        // * Vindo com ele, temos: nomeFormacao e nomeLecionador.
        try {
            var respostaSei = this.dvoFormacao.existeFormacaoSei(nomeFormacao, nomeLecionador);
            console.log("MockFormacaoManager -=-> ", respostaSei);
            console.log("\n");
            if (respostaSei) {
                this.mockDaoFormacao.apagarFormacaoSei(respostaSei.data.data.id);
                this.mockDaoFormacao.apagarFormacao(respostaSei.data.data.id);
                return true;
            }
            return false;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    };
    MockFormacaoManager.prototype.espelharFormacao = function (formacao, nomeLecionador) {
        try {
            var respostaSei = this.dvoFormacao.existeFormacaoSei(formacao.getNome, nomeLecionador);
            if (respostaSei) {
                this.mockDaoFormacao.atualizarFormacaoSei(respostaSei.data);
                this.mockDaoFormacao.atualizarFormacao(respostaSei.data);
            }
            else {
                this.mockDaoFormacao.criarFormacaoSei(respostaSei.data);
                this.mockDaoFormacao.criarFormacao(respostaSei.data);
            }
            return this.mockDaoFormacao.lerFormacao(respostaSei.data.id);
        }
        catch (error) {
            console.error(error);
        }
    };
    return MockFormacaoManager;
}());
exports.MockFormacaoManager = MockFormacaoManager;
