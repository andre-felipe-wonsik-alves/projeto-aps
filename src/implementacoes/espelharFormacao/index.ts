import { Formacao } from "../../classes/Formacao";
import { DaoManager } from "../../managers/DaoManager";
import { DvoFormacao } from "../../DVOs/DvoFormacao";
import { FormacaoManager } from "../../managers/FormacaoManager";

export async function main() {
  const man = new DaoManager;
  const daoFormacao =  man.getDaoFormacao();
  const dvoFormacao = new DvoFormacao(daoFormacao);
  const formacaoManager = new FormacaoManager(daoFormacao, dvoFormacao);

  const novaFormacao = new Formacao(1, "eberzao", 100, 2);

  try {
    const retorno = await formacaoManager.espelharFormacao(
        novaFormacao,
        "Sigma"
    );

    
  } catch (error) {
    console.error("Erro:", error.message);
  }
}
