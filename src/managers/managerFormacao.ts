import { DaoFormacao } from "../DAOs/DaoFormacao";
import { DvoFormacao } from "../DVOs/DvoFormacao";

export class ManagerFormacao {
  private daoFormacao: DaoFormacao;
  private dvoFormacao: DvoFormacao;

  constructor(daoFormacao: DaoFormacao, dvoFormacao: DvoFormacao) {
    this.daoFormacao = daoFormacao;
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
        this.daoFormacao.apagarFormacaoSei(respostaSei.data.id);
        this.daoFormacao.apagarFormacao(respostaSei.data.id);
        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
