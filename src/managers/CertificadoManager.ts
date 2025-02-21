import { DaoInscricao } from "../DAOs/DaoInscricao";
import { DvoInscricao } from "../DVOs/DvoInscricao";
import { APIManager } from "./APIManager";

export class CertificadoManager {
  private dvoInscricao: DvoInscricao;
  private daoInscricao: DaoInscricao;

  private apiManager: APIManager = new APIManager();

  constructor(dvoInscricao: DvoInscricao, daoInscricao: DaoInscricao) {
    this.dvoInscricao = dvoInscricao;
    this.daoInscricao = daoInscricao;
  }

  async imprimirCertificado(idParticipante: number, idFormacao: number): Promise<Int8Array> {
    try {
      let inscricao = await this.daoInscricao.getInscricao(idParticipante, idFormacao);
      if (inscricao == null) {
        throw new Error("Inscrição não encontrada");
      }

      return this.gerarCertificado(idParticipante, idFormacao, inscricao.getCargaHorariaParticipante());
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async gerarCertificado(idParticipante: number, idFormacao: number, cargaHorariaParticipante: number): Promise<Int8Array> {
    try {
      let cargaHorariaValida = await this.dvoInscricao.validarCargaHoraria(cargaHorariaParticipante, idFormacao);
      if (!cargaHorariaValida) {
        throw new Error("Carga horária inválida");
      }

      return this.apiManager.emit(idParticipante, idFormacao, cargaHorariaParticipante);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

