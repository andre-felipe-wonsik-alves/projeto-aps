export class Participante {
  constructor(protected idParticipante: number) {}

  public getIdParticipante(): number {
    return this.idParticipante;
  }

  public setIdParticipante(idParticipante: number): void {
    this.idParticipante = idParticipante;
  }
}
