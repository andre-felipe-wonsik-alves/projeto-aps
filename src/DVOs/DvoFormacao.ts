import { DaoFormacao } from "../DAOs/DaoFormacao";

export class DvoFormacao {
  constructor(protected daoFormacao: DaoFormacao) {}
  public existeFormacaoSei(nomeFormacao, nomeLecionador): any {
    const formacoes = this.daoFormacao.retorneFormacoesSei();

    if (!formacoes.status) return { exists: "error" }; // ? Caso haja erro na requisição

    for (const formacao in formacoes) {
      if (
        (formacao == "name" || formacao == "teacher") &&
        (formacoes[formacao] == nomeFormacao ||
          formacoes[formacao] == nomeLecionador)
      ) {
        return { exists: true, data: formacoes }; // ? Caso já exista a formação no SEI
      }
    }

    return { exists: false, data: formacoes }; // ? Não existe no SEI
  }
}
