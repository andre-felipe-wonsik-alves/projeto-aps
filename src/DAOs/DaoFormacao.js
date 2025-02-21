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
exports.DaoFormacao = void 0;
var Formacao_1 = require("../classes/Formacao");
var database_1 = require("../../database");
var axios_1 = require("axios");
var DaoFormacao = /** @class */ (function () {
    function DaoFormacao() {
    }
    DaoFormacao.prototype.lerFormacoesSei = function () {
        var resultado = axios_1.default
            .get("https://sei.utfpr.edu.br/sei/controlador.php/procedimento/")
            .then(function (response) {
            return { status: "200", data: response };
        })
            .catch(function (error) {
            console.error(error);
            return { status: null, data: error };
        });
        return resultado;
    };
    DaoFormacao.prototype.apagarFormacaoSei = function (idFormacao) {
        var resultado = axios_1.default
            .delete("https://sei.utfpr.edu.br/sei/controlador.php/procedimento/".concat(idFormacao, "/"))
            .then(function (response) {
            return { status: "200", data: response };
        })
            .catch(function (error) {
            console.error(error);
            return { status: null, data: error };
        });
        return resultado;
    };
    DaoFormacao.prototype.criarFormacaoSei = function (formacao) {
        return __awaiter(this, void 0, void 0, function () {
            var resultado;
            return __generator(this, function (_a) {
                resultado = axios_1.default
                    .post("https://sei.utfpr.edu.br/sei/controlador.php/procedimento", {
                    id: formacao.getIdFormacao(),
                    nome: formacao.getNome(),
                    cargaHoraria: formacao.getCargaHoraria(),
                    maxParticipantes: formacao.getMaxParticipantes(),
                })
                    .then(function (response) {
                    return { status: "201", data: response };
                })
                    .catch(function (error) {
                    console.error(error);
                    return { status: null, data: error };
                });
                return [2 /*return*/, resultado];
            });
        });
    };
    DaoFormacao.prototype.atualizarFormacaoSei = function (formacao) {
        return __awaiter(this, void 0, void 0, function () {
            var resultado;
            return __generator(this, function (_a) {
                resultado = axios_1.default
                    .put("https://sei.utfpr.edu.br/sei/controlador.php/procedimento/".concat(formacao.getIdFormacao), {
                    nome: formacao.getNome(),
                    cargaHoraria: formacao.getCargaHoraria(),
                    maxParticipantes: formacao.getMaxParticipantes(),
                })
                    .then(function (response) {
                    return { status: "201", data: response };
                })
                    .catch(function (error) {
                    console.error(error);
                    return { status: null, data: error };
                });
                return [2 /*return*/, resultado];
            });
        });
    };
    DaoFormacao.prototype.atualizarFormacao = function (formacao) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "UPDATE Formacao SET nome = ".concat(formacao.getNome(), ", cargaHoraria = ").concat(formacao.getCargaHoraria(), ", maxParticipantes = ").concat(formacao.getMaxParticipantes(), " WHERE idFormacao = ").concat(formacao.getIdFormacao(), ";");
                        return [4 /*yield*/, database_1.default.query(query)];
                    case 1:
                        result = _a.sent();
                        console.log("Forma\u00E7\u00E3o de id: ".concat(formacao.getIdFormacao(), " foi atualizada com sucesso!"));
                        return [2 /*return*/, result];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [2 /*return*/, err_1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DaoFormacao.prototype.criarFormacao = function (formacao) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "INSERT INTO Formacao (idFormacao, nome, cargaHoraria, maxParticipantes) VALUES (".concat(formacao.getIdFormacao(), ", ").concat(formacao.getNome(), ", ").concat(formacao.getCargaHoraria(), ", ").concat(formacao.getMaxParticipantes(), ");");
                        return [4 /*yield*/, database_1.default.query(query)];
                    case 1:
                        result = _a.sent();
                        console.log("Forma\u00E7\u00E3o de id: ".concat(formacao.getIdFormacao(), " foi criada com sucesso!"));
                        return [2 /*return*/, result];
                    case 2:
                        err_2 = _a.sent();
                        console.error(err_2);
                        return [2 /*return*/, err_2];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DaoFormacao.prototype.apagarFormacao = function (idFormacao) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "DELETE FROM Formacao WHERE Formacao.id == ".concat(idFormacao);
                        return [4 /*yield*/, database_1.default.query(query)];
                    case 1:
                        result = _a.sent();
                        console.log("Forma\u00E7\u00E3o de id: ".concat(idFormacao, " foi deletada com sucesso!"));
                        return [2 /*return*/, result];
                    case 2:
                        err_3 = _a.sent();
                        console.error(err_3);
                        return [2 /*return*/, err_3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DaoFormacao.prototype.lerFormacao = function (idFormacao) {
        return __awaiter(this, void 0, void 0, function () {
            var query, values, result, row, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        query = "SELECT * FROM Formacao WHERE idFormacao = $1";
                        values = [idFormacao];
                        return [4 /*yield*/, database_1.default.query(query, values)];
                    case 1:
                        result = _a.sent();
                        if (result.rows.length === 0) {
                            throw new Error("Formação não encontrada");
                        }
                        row = result.rows[0];
                        return [2 /*return*/, new Formacao_1.Formacao(row.idFormacao, row.nome, row.cargaHoraria, row.maxParticipantes)];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Erro ao recuperar formação:", error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return DaoFormacao;
}());
exports.DaoFormacao = DaoFormacao;
