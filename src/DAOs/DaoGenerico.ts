export class DaoGenerico<T> {
  //Define uma classe genérica que pode lidar com qualquer tipo T
  protected dados: T[] = []; //Array para armazenar os objetos   //Quando um membro é declarado como protected, ele só pode ser acessado dentro da própria classe e em suas classes filhas (herança).
  private contadorId: number = 1; //Um contador para gerar IDs únicos para os objetos

  // Método para criar uma nova entidade
  criar(entidade: Omit<T, "id">): T {
    // O parâmetro entity é do tipo T, mas sem a propriedade id (Omit<T, 'id'> remove o campo id do tipo T).
    const novaEntidade = { ...entidade, id: this.contadorId } as T; // Cria um novo objeto combinando os valores de entity com um id gerado automaticamente.
    this.dados.push(novaEntidade); //Adiciona o novo objeto ao array data.
    this.contadorId++; //Incrementa o contador de IDs para que o próximo objeto receba um id único
    return novaEntidade; //Retorna o objeto recém-criado
  }

  // Método para buscar uma entidade pelo ID
  encontrarPorId(id: number): T | null {
    return this.dados.find((item) => (item as any).id === id) || null;

    //item => (item as any).id === id) poderia ser tipo:

    // Procura no array data um item cujo campo id seja igual ao id fornecido.
    //(item as any).id: Como T é genérico, o TypeScript não sabe se o tipo T possui o campo id. Usamos any para informar que o item tem esse campo.
    //Retorna null caso não encontre nenhum item com o id fornecido.
  }

  // Método para buscar todas as entidades
  encontrarTodos(): T[] {
    return [...this.dados];
  }

  // Método para atualizar uma entidade pelo ID
  atualizar(id: number, atualizacoes: Partial<Omit<T, "id">>): T | null {
    //Recebe o id do objeto a ser atualizado e as alterações a serem aplicadas (updates).
    const index = this.dados.findIndex((item) => (item as any).id === id); //Procura o índice do objeto com o id fornecido no array data.
    if (index === -1) return null; //Se o objeto não for encontrado, retorna null.

    //sem a => ficaria:
    //const index = this.dados.findIndex(function(item) {
    //  return (item as any).id === id;
    //  });

    this.dados[index] = { ...this.dados[index], ...atualizacoes } as T; //Atualiza o objeto no índice encontrado, combinando seus valores atuais com as alterações (updates).
    return this.dados[index]; //Retorna o objeto atualizado.
  }

  // Método para deletar uma entidade pelo ID
  deletar(id: number): boolean {
    const index = this.dados.findIndex((item) => (item as any).id === id); //Procura o índice do objeto com o id fornecido.
    if (index === -1) return false; //Se o objeto não for encontrado, retorna false.

    this.dados.splice(index, 1); //Remove o objeto do array data usando o índice encontrado.
    return true; //Retorna true para indicar que o objeto foi deletado com sucesso.
  }
}
