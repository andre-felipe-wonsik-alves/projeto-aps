export class Formacao {
  constructor(
    protected id: number,
    protected nome: string,
    protected cargaHoraria: number,
    protected maxParticipantes: number
  ) {}

  // * Resolvi deixar os métodos acessores dentro da própria classe, pois:
  // * Flexibilidade, reuso e simplicidade
  // * Não quebra a regra da responsabilidade única!

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
}
