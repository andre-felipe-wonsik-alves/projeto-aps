"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
var Participante_1 = require("../../classes/Participante");
var Formacao_1 = require("../../classes/Formacao");
var Inscricao_1 = require("../../classes/Inscricao");
var MockDaoInscricao_1 = require("../../mock/Inscricao/MockDaoInscricao");
var MockDvoInscricao_1 = require("../../mock/Inscricao/MockDvoInscricao");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var mockDaoInscricao, mockDvoInscricao, participante, formacao, inscricao, cargaHorariaParticipante, idFormacao, isValid, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockDaoInscricao = new MockDaoInscricao_1.MockDaoInscricao();
                    mockDvoInscricao = new MockDvoInscricao_1.MockDvoInscricao(mockDaoInscricao);
                    participante = new Participante_1.Participante(1);
                    formacao = new Formacao_1.Formacao(1, "Programação Orientada à Objetos", 40, 30);
                    inscricao = new Inscricao_1.Inscricao(participante, formacao, 40);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    // Simulando a criação de uma inscrição
                    return [4 /*yield*/, mockDaoInscricao.criarInscricao(inscricao)];
                case 2:
                    // Simulando a criação de uma inscrição
                    _a.sent();
                    cargaHorariaParticipante = 40;
                    idFormacao = 1;
                    return [4 /*yield*/, mockDvoInscricao.validarCargaHoraria(cargaHorariaParticipante, idFormacao)];
                case 3:
                    isValid = _a.sent();
                    console.log("A carga hor\u00E1ria do participante \u00E9 v\u00E1lida? ".concat(isValid));
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("Erro:", error_1.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
