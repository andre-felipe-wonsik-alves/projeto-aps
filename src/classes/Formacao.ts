export class Formacao {
  constructor(
    private id,
    private nome,
    private cargaHoraria,
    private maxParticipantes
  ) {}

  public getId(): number {
    return this.id;
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

  public setId(id: number) {
    this.id = id;
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

  existeFormacaoSei() {}
  apagarFormacaoSei() {}
  apagarFormacao() {}
}
