import { Participante } from "../../classes/Participante";
import { Formacao } from "../../classes/Formacao";
import { Inscricao } from "../../classes/Inscricao";
import { DvoInscricao } from "../../DVOs/DvoInscricao";
import { DaoManager } from "../../managers/DaoManager";

export async function main() {
  const daoManager = new DaoManager();
  const daoInscricao = daoManager.getDaoInscricao();
  const dvoInscricao = new DvoInscricao(daoManager);

  const participante = new Participante(1);
  const formacao = new Formacao(1, "Programação Orientada à Objetos", 40, 30);
  const inscricao = new Inscricao(participante, formacao, 40);

  try {
    // Simulando a criação de uma inscrição
    await daoInscricao.criarInscricao(inscricao);

    // Validando a carga horária do participante em relação à formação
    const cargaHorariaParticipante = 40;
    const idFormacao = 1;
    const isValid = await dvoInscricao.validarCargaHoraria(cargaHorariaParticipante, idFormacao);

    console.log(`A carga horária do participante é válida? ${isValid}`);
  } catch (error) {
    console.error("Erro:", error.message);
  }
}