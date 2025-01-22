import { DaoFormacao } from "../../DAOs/DaoFormacao";
import { DvoFormacao } from "../../DVOs/DvoFormacao";

export function desatrelarFormacao(
  nomeFormacao: string,
  nomeLecionador: string
): boolean {
  // * << Pedagogo dispara o gatilho que apaga uma formação do sistema >>
  // * Vindo com ele, temos: nomeFormacao e nomeLecionador.
  try {
    const daoFormacao = new DaoFormacao();
    const dvoFormacao = new DvoFormacao(daoFormacao);

    const respostaSei = dvoFormacao.existeFormacaoSei(
      nomeFormacao,
      nomeLecionador
    );

    if (respostaSei) {
      daoFormacao.apagarFormacaoSei(respostaSei.data.id);
      daoFormacao.apagarFormacao(respostaSei.data.id);
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
}
