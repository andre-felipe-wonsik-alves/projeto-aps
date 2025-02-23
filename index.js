import { main as desatrelarFormacao } from "./src/implementacoes/desatrelarFormacao/MockIndex.js";
import { main as validarCargaHoraria } from "./src/implementacoes/validarCargaHoraria/MockIndex.js";
import { main as espelharFormacao } from "./src/implementacoes/espelharFormacao/MockIndex.js";

import readline from "readline";

console.log(
  "\x1b[33m",
  "\n\n<<< Implementacoes do projeto Formacoes UTFPR >>>>\n\n"
);

console.log(
  "\x1b[0m",
  "Escolha um caso de uso há ser executado:\n1 - Validar carga horária\n2 - Desatrelar formação\n3 - Espelhar formação"
);

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("\n-> ", function (resposta) {
  switch (resposta) {
    case "1":
      validarCargaHoraria();
      break;
    case "2":
      desatrelarFormacao();
      break;
    case "3":
      espelharFormacao();
      break;

    default:
      console.log("Opção inválida!");
      break;
  }

  input.close();
});
