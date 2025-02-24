import { Formacao } from "../../classes/Formacao";
import { MockDaoFormacao } from "./MockDaoFormacao";
import { MockDvoFormacao } from "./MockDvoFormacao";

export class MockFormacaoManager {
  private mockDaoFormacao: MockDaoFormacao;
  private dvoFormacao: MockDvoFormacao;

  constructor(mockDaoFormacao: MockDaoFormacao, dvoFormacao: MockDvoFormacao) {
    this.mockDaoFormacao = mockDaoFormacao;
    this.dvoFormacao = dvoFormacao;
  }

  desatrelarFormacao(idFormacao: number, nomeLecionador: string): boolean {
    // * << Pedagogo dispara o gatilho que apaga uma formação do sistema >>
    // * Vindo com ele, temos: idFormacao e nomeLecionador.
    try {
      const respostaSei = this.dvoFormacao.existeFormacaoSei(
        idFormacao,
        nomeLecionador
      );

      console.log("MockFormacaoManager -=-> ", respostaSei);
      console.log("\n");

      if (respostaSei) {
        this.mockDaoFormacao.apagarFormacaoSei(respostaSei.data.data.id);
        this.mockDaoFormacao.apagarFormacao(respostaSei.data.data.id);
        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  espelharFormacao(formacao: Formacao, nomeLecionador: string): Promise<Formacao> {
      try {
        const respostaSei = this.dvoFormacao.existeFormacaoSei(
          formacao.getNome,
          nomeLecionador
        );
  
        if (respostaSei) {
          this.mockDaoFormacao.atualizarFormacaoSei(respostaSei.data);
          this.mockDaoFormacao.atualizarFormacao(respostaSei.data);
        }
        else{
          this.mockDaoFormacao.criarFormacaoSei(respostaSei.data);
          this.mockDaoFormacao.criarFormacao(respostaSei.data);
        }
        return this.mockDaoFormacao.lerFormacao(respostaSei.data.id);
      } catch (error) {
        console.error(error);
      }
    }
}
