// function saudacao(nome) {
//   console.log(`Olá, ${nome}!`);
// }

// saudacao("Raphael");

// const soma = function (a, b) {
//   return a + b;
// };

// console.log(soma(5, 5));

// const soma = (a, b) => {
//   return a + b;
// };

// console.log(soma(10, 20));

// const dobro = (n) => n * 2;
// console.log(dobro(10));

// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(2, 3));

// function saudacao(nome = "Visitante") {
//   console.log(`Olá, ${nome}!`);
// }

// saudacao();

// function quadrado(n) {
//   return n * n;
// }

// let resultado = quadrado(2);
// console.log(resultado);

// function teste() {
//   let mensagem = "Olá!";
//   console.log(mensagem);
// }

// teste();

// function saudacao(nome) {
//   return function () {
//     console.log(`Olá, ${nome}`);
//   };
// }

// const olaRaphael = saudacao("Raphael");
// olaRaphael();

// function contador() {
//   let numero = 0;

//   return function () {
//     numero++;
//     console.log(numero);
//   };
// }

// const incrementar = contador();

// incrementar();
// incrementar();
// incrementar();
// incrementar();
// incrementar();
// incrementar();
// incrementar();
// incrementar();
// incrementar();
// incrementar();

function realParaDolar(real, cotacaoDolar) {
  return real * cotacaoDolar;
}

let valorReal = 8.54;
let cotacao = 5.72;

let total = realParaDolar(valorReal, cotacao);
console.log(realParaDolar(valorReal, cotacao));
