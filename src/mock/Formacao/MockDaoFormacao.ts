// * Em um mock, nós apenas assumiremos o retorno de uma requisição. Por exemplo, no método retorneFormacoesSei(),
// * há uma conexão com a API do SEI, portanto só exemplifiquei um objeto de retorno (tenha em mente que não é apenas inventar
// * um objeto qualquer, tente ao máximo seguir o padrão de retorno descrito nos artefatos).

export class MockDaoFormacao {
  public retorneFormacoesSei(): any {
    const resultado = {
      status: 200,
      data: {
        id: 1,
        name: "Programação Orientada à Objetos: um estudo de caso",
        owner: "André Felipe Wonsik Alves",
      },
    };
    return resultado;
  }
  public apagarFormacaoSei(idFormacao): any {
    const resultado = {
      status: "200",
      data: {
        message: `Formação de id ${idFormacao} apagada do SEI com sucesso!`,
      },
    };

    console.log(resultado.data.message);

    return resultado;
  }

  public atualizarFormacaoSei(idFormacao): any {
    const resultado = {
      status: "200",
      data: {
        message: `Formação de id ${idFormacao} atualizada no SEI com sucesso!`,
      },
    };

    console.log(resultado.data.message);

    return resultado;
  }

  public criarFormacaoSei(idFormacao): any {
    const resultado = {
      status: "200",
      data: {
        message: `Formação de id ${idFormacao} criada no SEI com sucesso!`,
      },
    };

    console.log(resultado.data.message);

    return resultado;
  }

  public async apagar(idFormacao): Promise<any> {
    const resultado = {
      status: "200",
      message: `Formação de id ${idFormacao} apagada do sistema com sucesso!`,
    };

    console.log(resultado.message);

    return resultado;
  }

  public async criar(idFormacao): Promise<any> {
    const resultado = {
      status: "200",
      message: `Formação de id ${idFormacao} criada no sistema com sucesso!`,
    };

    console.log(resultado.message);

    return resultado;
  }

  public async atualizar(formacao): Promise<any> {    
    const resultado = {
      status: "200",
      message: `Formação de id ${formacao.id} atualizada com sucesso!`,
    };

    console.log(resultado.message);

    return resultado;
  }
}
