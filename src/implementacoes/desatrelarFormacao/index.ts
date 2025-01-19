import { DaoFormacao } from "../../DAOs/DaoFormacao";

export function desatrelarFormacao(
  nomeFormacao: string,
  nomeLecionador: string
): boolean {
  // * << Pedagogo dispara o gatilho que apaga uma formação do sistema >>
  // * Vindo com ele, temos: nomeFormacao e nomeLecionador.
  try {
    const daoFormacao = new DaoFormacao();
    const respostaSei = daoFormacao.existeFormacaoSei(
      nomeFormacao,
      nomeLecionador
    );

    if (respostaSei.status) {
      daoFormacao.apagarFormacaoSei(respostaSei.id);
      daoFormacao.apagarFormacao(respostaSei.id);
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
}
