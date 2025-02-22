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

  desatrelarFormacao(nomeFormacao: string, nomeLecionador: string): boolean {
    // * << Pedagogo dispara o gatilho que apaga uma formação do sistema >>
    // * Vindo com ele, temos: nomeFormacao e nomeLecionador.
    try {
      const respostaSei = this.dvoFormacao.existeFormacaoSei(
        nomeFormacao,
        nomeLecionador
      );

      console.log("MockFormacaoManager -=-> ", respostaSei);
      console.log("\n");

      if (respostaSei) {
        this.mockDaoFormacao.apagarFormacaoSei(respostaSei.data.data.id);
        this.mockDaoFormacao.apagar(respostaSei.data.data.id);
        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  espelharFormacao(formacao: Formacao, nomeLecionador: string): void{
      try {
        const respostaSei = this.dvoFormacao.existeFormacaoSei(
          formacao.getNome,
          nomeLecionador
        );
  
        if (respostaSei) {
          this.mockDaoFormacao.atualizarFormacaoSei(respostaSei.data);
          this.mockDaoFormacao.atualizar(respostaSei.data);
        }
        else{
          this.mockDaoFormacao.criarFormacaoSei(respostaSei.data);
          this.mockDaoFormacao.criar(respostaSei.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
}
