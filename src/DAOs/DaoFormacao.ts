import { Formacao } from "../classes/Formacao";
import pool from "../../database";
import axios from "axios";

export class DaoFormacao{
  public lerFormacoesSei(): any {
    const resultado = axios
      .get(`https://sei.utfpr.edu.br/sei/controlador.php/procedimento/`)
      .then(function (response) {
        return { status: "200", data: response };
      })
      .catch(function (error) {
        console.error(error);
        return { status: null, data: error };
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
        return { status: null, data: error };
      });

    return resultado;
  }

  public async criarFormacaoSei(formacao: Formacao) {
    const resultado = axios
      .post(`https://sei.utfpr.edu.br/sei/controlador.php/procedimento`, {
        id: formacao.getIdFormacao(),
        nome: formacao.getNome(),
        cargaHoraria: formacao.getCargaHoraria(),
        maxParticipantes: formacao.getMaxParticipantes(),
      })
      .then(function (response) {
        return { status: "201", data: response };
      })
      .catch(function (error) {
        console.error(error);
        return { status: null, data: error };
      });

    return resultado;
  }

  public async atualizarFormacaoSei(formacao: Formacao) {
    const resultado = axios
      .put(`https://sei.utfpr.edu.br/sei/controlador.php/procedimento/${formacao.getIdFormacao}`, {
        nome: formacao.getNome(),
        cargaHoraria: formacao.getCargaHoraria(),
        maxParticipantes: formacao.getMaxParticipantes(),
      })
      .then(function (response) {
        return { status: "201", data: response };
      })
      .catch(function (error) {
        console.error(error);
        return { status: null, data: error };
      });

    return resultado;
  }

  public async atualizarFormacao(formacao: Formacao): Promise<string> {
    try {
      const query = `UPDATE Formacao SET nome = ${formacao.getNome()}, cargaHoraria = ${formacao.getCargaHoraria()}, maxParticipantes = ${formacao.getMaxParticipantes()} WHERE idFormacao = ${formacao.getIdFormacao()};`;

      const result = await pool.query(query);

      console.log(`DAO -> Formação de id: ${formacao.getIdFormacao()} foi atualizada com sucesso!`);

      return result;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  public async criarFormacao(formacao: Formacao): Promise<string> {
    try {
      const query = `INSERT INTO Formacao (idFormacao, nome, cargaHoraria, maxParticipantes) VALUES (${formacao.getIdFormacao()}, ${formacao.getNome()}, ${formacao.getCargaHoraria()}, ${formacao.getMaxParticipantes()});`;

      const result = await pool.query(query);

      console.log(`Formação de id: ${formacao.getIdFormacao()} foi criada com sucesso!`);

      return result;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  
  public async apagarFormacao(idFormacao): Promise<string> {
    try {
      const query = `DELETE FROM Formacao WHERE Formacao.id == ${idFormacao}`;

      const result = await pool.query(query);

      console.log(`Formação de id: ${idFormacao} foi deletada com sucesso!`);

      return result;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  public async lerFormacao(idFormacao: number): Promise<Formacao> {
    try {
      const query = `SELECT * FROM Formacao WHERE idFormacao = $1`;
      const values = [idFormacao];

      const result = await pool.query(query, values);

      if (result.rows.length === 0) {
        throw new Error("Formação não encontrada");
      }

      const row = result.rows[0];

      return new Formacao(
        row.idFormacao,
        row.nome,
        row.cargaHoraria,
        row.maxParticipantes
      );
    } catch (error) {
      console.error("Erro ao recuperar formação:", error);
      throw error;
    }
  }
}
