import { DaoFormacao } from "../DAOs/DaoFormacao";
import { DvoFormacao } from "../DVOs/DvoFormacao";
import { Formacao } from "../classes/Formacao";

export class FormacaoManager {
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

  listarFormacoes(): Formacao[] {
    try {
      const formacoes = this.daoFormacao.lerFormacoesSei();
      return formacoes;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async existeFormacao(idFormacao: number, nomeLecionador: string): Promise<Boolean> {
    try {
      let formacao = await this.daoFormacao.lerFormacao(idFormacao)
      if (formacao == null) {
        return false
      }

      const respostaSei = this.dvoFormacao.existeFormacaoSei(
        formacao.getNome,
        nomeLecionador
      );

      return respostaSei;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  espelharFormacao(formacao: Formacao, nomeLecionador: string): void{
    try {
      const respostaSei = this.dvoFormacao.existeFormacaoSei(
        formacao.getNome,
        nomeLecionador
      );

      if (respostaSei) {
        this.daoFormacao.atualizarFormacaoSei(respostaSei.data);
        this.daoFormacao.atualizarFormacao(respostaSei.data);
      }
      else{
        this.daoFormacao.criarFormacaoSei(respostaSei.data);
        this.daoFormacao.criarFormacao(respostaSei.data);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

