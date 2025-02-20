import { MockDaoInscricao } from "./MockDaoInscricao";

export class MockDvoInscricao {
  private mockDaoInscricao: MockDaoInscricao;

  constructor(mockDaoInscricao: MockDaoInscricao) {
    this.mockDaoInscricao = mockDaoInscricao;
  }

  // Método para validar a carga horária do participante em relação à formação
  public async validarCargaHoraria(cargaHorariaParticipante: number, idFormacao: number): Promise<boolean> {
    const inscricao = await this.mockDaoInscricao.ler(1, idFormacao); // Simulando a recuperação de uma inscrição
    if (!inscricao) {
      return false;
    }
    const cargaHorariaFormacao = inscricao.getCargaHorariaParticipante();

    // Retorna true se a carga horária do participante for igual à da formação, caso contrário, false
    return cargaHorariaParticipante === cargaHorariaFormacao;
  }
}