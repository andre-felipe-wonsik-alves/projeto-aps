export class Formacao {
  constructor(
    protected id: number,
    protected nome: string,
    protected cargaHoraria: number,
    protected maxParticipantes: number
  ) {}
}
