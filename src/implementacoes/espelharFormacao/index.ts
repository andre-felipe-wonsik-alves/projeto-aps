import { Formacao } from "../../classes/Formacao";
import { DaoFormacao } from "../../DAOs/DaoFormacao";
import { DvoFormacao } from "../../DVOs/DvoFormacao";
import { ManagerFormacao } from "../../managers/managerFormacao";

export async function main() {
  const daoFormacao = new DaoFormacao();
  const dvoFormacao = new DvoFormacao(daoFormacao);
  const formacaoManager = new ManagerFormacao(daoFormacao, dvoFormacao);

  const novaFormacao = new Formacao(1, "eberzao", 100, 2);

  try {
    const retorno = await formacaoManager.espelharFormacao(
        novaFormacao,
        "Sigma"
    );

    console.log(retorno);
  } catch (error) {
    console.error("Erro:", error.message);
  }
}
