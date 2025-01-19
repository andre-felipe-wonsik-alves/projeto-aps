import { Formacao } from "../classes/Formacao";
import pool from "../../database";
import axios from "axios";

export class DAOFormacao extends Formacao {
  constructor(
    id: number,
    nome: string,
    cargaHoraria: number,
    maxParticipantes: number
  ) {
    super(id, nome, cargaHoraria, maxParticipantes);
  }

  // ! O método existeFormacaoSei possui 2 responsabilidades, o que é um problema
  // ! Abstrair na próxima mudança.
  public existeFormacaoSei(): any {
    const resultado = axios
      .get(`https://sei.utfpr.edu.br/sei/controlador.php/procedimento/`)
      .then(function (response) {
        return { status: "200", data: response };
      })
      .catch(function (error) {
        console.error(error);
        return { status: "error", data: error };
      });

    return resultado;
  }

  public apagarFormacaoSei(idFormacao): any {
    const resultado = axios
      .delete(
        `https://sei.utfpr.edu.br/sei/controlador.php/procedimento/${idFormacao}/`
      )
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
      const query = `DELETE FROM Formacao WHERE Formacao.id == ${id}`;

      const result = await pool.query(query);
      return result;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  public async criarFormacaoSei(formacao: Formacao) {
    const resultado = axios
      .post(
        `https://sei.utfpr.edu.br/sei/controlador.php/procedimento`, 
        {
          'id': formacao.getId(),
          'nome': formacao.getNome(),
          'cargaHoraria': formacao.getCargaHoraria(),
          'maxParticipantes': formacao.getMaxParticipantes()
        }
      )
      .then(function (response) {
        return { status: "200", data: response };
      })
      .catch(function (error) {
        console.error(error);
        return { status: "error", data: error };
      });

    return resultado;
  }

  public async espelharFormacao(idFormacao: number, formacao: Formacao) {
    
  }
}
