import { MockDaoFormacao } from "./MockDaoFormacao";

export class MockDvoFormacao {
  private mockDaoFormacao: MockDaoFormacao;

  constructor(mockDaoFormacao: MockDaoFormacao) {
    this.mockDaoFormacao = mockDaoFormacao;
  }
  public existeFormacaoSei(nomeFormacao, nomeLecionador): any {
    const formacoes = this.mockDaoFormacao.retorneFormacoesSei();

    if (!formacoes.status) return { exists: "error" }; // ? Caso haja erro na requisição

    for (const campoFormacao in formacoes) {
      if (
        (campoFormacao == "name" || campoFormacao == "owner") &&
        (formacoes[campoFormacao] == nomeFormacao ||
          formacoes[campoFormacao] == nomeLecionador)
      ) {
        return { exists: true, data: formacoes }; // ? Caso já exista a formação no SEI
      }
    }

    return { exists: false, data: formacoes }; // ? Não existe no SEI
  }
}
