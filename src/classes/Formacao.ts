const axios = require("axios").default;
import pool from "../../database";

export class Formacao {
  constructor(
    private id,
    private nome,
    private cargaHoraria,
    private maxParticipantes
  ) {}

  // ! PASSAR PARA O DAO URGENTEMENTE
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

  public existeFormacaoSei(): string {
    const resultado = axios
      .get(`{url_api_sei}`)
      .then(function (response) {
        return { status: "200", data: response };
      })
      .catch(function (error) {
        console.error(error);
        return { status: "error", data: error };
      });

    return resultado;
  }

  public apagarFormacaoSei(body: string): string {
    const resultado = axios
      .post(`{url_api_sei}`, body)
      .then(function (response) {
        return { status: "200", data: response };
      })
      .catch(function (error) {
        console.error(error);
        return { status: "error", data: error };
      });

    return resultado;
  }

  public async apagarFormacao(req: Request, res: Response): Promise<string> {
    const { id }: any = req.body;

    try {
      const query = `DELETE FROM Formacao WHERE Formacao.id == {id}`;

      const result = await pool.query(query);

      return result;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}
