for (let i = 1; i <= 5; i++) {
  console.log("Número:", i);
}

let i = 1;

while (i <= 5) {
  console.log("Número:", i);
  i++;
}

let i = 1;

do {
  console.log("Número:", i);
  i++;
} while (i <= 5);

let x = 10;
let i = 10;

while (x < 5) {
  console.log("while:", x);
}

do {
  console.log("do...while:", i);
} while (i < 5);

const frutas = ["Maçã", "Banana", "Laranja"];
frutas.push("Manga");

for (let i = 0; i < frutas.length; i++) {
  console.log("Frutas:", frutas[i]);
}

let senha = "";

while (senha !== "1234") {
  senha = prompt("Digite a senha correta:");
  if (senha !== "1234") {
    alert("Senha incorreta!");
  }
}

console.log("Acesso liberado!");

let opcao;

do {
  opcao = prompt("Escolha uma opção: \n1 - Olá\n2 - Tchau\n3 - Sair");

  if (opcao === "1") {
    console.log("Você escolheu Olá");
  } else if (opcao === "2") {
    console.log("Você escolheu Tchau");
  } else {
    console.log("Escolha não existe!");
  }
} while (opcao !== "3");

console.log("Encerrando...");
