// const lib = require("./src/imprimirCertificado/index.ts");
import { main } from "./src/implementacoes/desatrelarFormacao/index";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();
// lib.helloWorld();

console.log(
  "\x1b[33m",
  "\n\n<<< Implementacoes do projeto Formacoes UTFPR >>>>\n\n"
);

console.log(
  "\x1b[0m",
  "Escolha um caso de uso há ser executado:\n1 - Imprimir certiicado\n2 - Validar carga horária\n3 - Desatrelar formação\n4 - Espelhar formação"
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("\n-> ", function (resposta) {
  switch (resposta) {
    case "1":
      break;

    default:
      main();
      break;
  }

  rl.close();
});
