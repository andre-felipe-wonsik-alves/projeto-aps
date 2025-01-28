import { Formacao } from "../../classes/Formacao";
import { DvoFormacao } from "../../DVOs/DvoFormacao";
import { DaoManager } from "../../managers/DaoManager";
import { FormacaoManager } from "../../managers/FormacaoManager";

export async function main() {
  const daoManager = new DaoManager();
  const daoFormacao = daoManager.getDaoFormacao();
  const dvoFormacao = new DvoFormacao(daoFormacao);
  const formacaoManager = new FormacaoManager(daoFormacao, dvoFormacao);

  const novaFormacao = new Formacao(1, "andrezao", 12, 10);

  try {
    const retorno = await formacaoManager.desatrelarFormacao(
      novaFormacao.getNome(),
      "felipe"
    );

    console.log(retorno);
  } catch (error) {
    console.error("Erro:", error.message);
  }
}
