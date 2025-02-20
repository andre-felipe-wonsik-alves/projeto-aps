import { Formacao } from "../classes/Formacao";
import pool from "../../database";
import axios from "axios";

export class DaoFormacao {
  public retorneFormacoesSei(): any {
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

  public async atualizar(formacao: Formacao) {
    try {
      const query = `UPDATE Formacao SET nome = ${formacao.getNome()}, cargaHoraria = ${formacao.getCargaHoraria()}, maxParticipantes = ${formacao.getMaxParticipantes()} WHERE idFormacao = ${formacao.getIdFormacao()};`;

      const result = await pool.query(query);

      console.log(`Formação de id: ${formacao.getIdFormacao()} foi atualizada com sucesso!`);

      return result;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  public async criarFormacao(formacao: Formacao) {
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

  retrieve(idFormacao: number): Formacao { //!Erickao ta testando o retrive aqui
    //!E o professor comentou em deixar os exemplos prontos nos DAO ai deixei ai pra testar!
    // Simula a recuperação de uma formação do banco de dados
    // Aqui você pode implementar a lógica real de acesso ao banco de dados
    // Exemplo de dados simulados:
    const formacoes = [
      new Formacao(1, "Curso de TypeScript", 30, 40),
      new Formacao(2, "Curso de JavaScript", 50, 60),
    ];

    const formacaoEncontrada = formacoes.find(f => f.getIdFormacao() === idFormacao);
    if (!formacaoEncontrada) {
      throw new Error("Formação não encontrada");
    }

    return formacaoEncontrada;
  }
}
