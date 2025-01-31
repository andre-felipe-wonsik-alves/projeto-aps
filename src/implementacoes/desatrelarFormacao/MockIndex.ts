import { Formacao } from "../../classes/Formacao";
import { DvoFormacao } from "../../DVOs/DvoFormacao";
import { DaoManager } from "../../managers/DaoManager";
import { FormacaoManager } from "../../managers/FormacaoManager";

import { MockFormacaoManager } from "../../mock/Formacao/MockFormacaoManager";

export async function main() {
  const daoManager = new DaoManager();
  const daoFormacao = daoManager.getDaoFormacao();
  const dvoFormacao = new DvoFormacao(daoFormacao);
  const formacaoManager = new FormacaoManager(daoFormacao, dvoFormacao);

  const novaFormacao = new Formacao(
    1,
    "Programação Orientada à Objetos: um estudo de caso",
    12,
    10
  );

  try {
    const retorno = formacaoManager.desatrelarFormacao(
      novaFormacao.getNome(),
      "André Felipe Wonsik Alves"
    );

    console.log(retorno);
  } catch (error) {
    console.error("Erro:", error.message);
  }
}
