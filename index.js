import { main } from "./src/implementacoes/desatrelarFormacao/MockIndex.js";
import readline from "readline";

console.log(
  "\x1b[33m",
  "\n\n<<< Implementacoes do projeto Formacoes UTFPR >>>>\n\n"
);

console.log(
  "\x1b[0m",
  "Escolha um caso de uso há ser executado:\n1 - Imprimir certiicado\n2 - Validar carga horária\n3 - Desatrelar formação\n4 - Espelhar formação"
);

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("\n-> ", function (resposta) {
  switch (resposta) {
    case "1":
      break;

    default:
      main();
      break;
  }

  input.close();
});
