import { MockDaoFormacao } from "./MockDaoFormacao";
import { MockDvoFormacao } from "./MockDvoFormacao";

export class MockFormacaoManager {
  private mockDaoFormacao: MockDaoFormacao;
  private dvoFormacao: MockDvoFormacao;

  constructor(mockDaoFormacao: MockDaoFormacao, dvoFormacao: MockDvoFormacao) {
    this.mockDaoFormacao = mockDaoFormacao;
    this.dvoFormacao = dvoFormacao;
  }

  desatrelarFormacao(nomeFormacao: string, nomeLecionador: string): boolean {
    // * << Pedagogo dispara o gatilho que apaga uma formação do sistema >>
    // * Vindo com ele, temos: nomeFormacao e nomeLecionador.
    try {
      const respostaSei = this.dvoFormacao.existeFormacaoSei(
        nomeFormacao,
        nomeLecionador
      );

      if (respostaSei) {
        this.mockDaoFormacao.apagarFormacaoSei(respostaSei.data.id);
        this.mockDaoFormacao.apagarFormacao(respostaSei.data.id);
        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
