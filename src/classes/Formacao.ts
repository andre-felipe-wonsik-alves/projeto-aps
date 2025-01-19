export class Formacao {
  constructor(
    protected idFormacao: number,
    protected nome: string,
    protected cargaHoraria: number,
    protected maxParticipantes: number
  ) {}

  public getIdFormacao(): number {
    return this.idFormacao;
  }
  public getNome(): string {
    return this.nome;
  }
  public getCargaHoraria(): number {
    return this.cargaHoraria;
  }
  public getMaxParticipantes(): number {
    return this.maxParticipantes;
  }

  public setId(idFormacao: number) {
    this.idFormacao = idFormacao;
  }
  public setNome(nome: string) {
    this.nome = nome;
  }
  public setCargaHoraria(cargaHoraria: number) {
    this.cargaHoraria = cargaHoraria;
  }
  public setMaxParticipantes(maxParticipantes: number) {
    this.maxParticipantes = maxParticipantes;
  }
}
