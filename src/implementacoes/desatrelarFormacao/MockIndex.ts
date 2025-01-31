import { Formacao } from "../../classes/Formacao";
import { MockDaoFormacao } from "../../mock/Formacao/MockDaoFormacao";
import { MockDvoFormacao } from "../../mock/Formacao/MockDvoFormacao";
import { MockFormacaoManager } from "../../mock/Formacao/MockFormacaoManager";

export async function main() {
  const mockDaoFormacao = new MockDaoFormacao();
  const mockDvoFormacao = new MockDvoFormacao(mockDaoFormacao);
  const mockFormacaoManager = new MockFormacaoManager(
    mockDaoFormacao,
    mockDvoFormacao
  );

  const novaFormacao = new Formacao(
    1,
    "Programação Orientada à Objetos: um estudo de caso",
    12,
    10
  );

  try {
    const retorno = mockFormacaoManager.desatrelarFormacao(
      novaFormacao.getNome(),
      "André Felipe Wonsik Alves"
    );

    console.log(retorno);
  } catch (error) {
    console.error("Erro:", error.message);
  }
}
