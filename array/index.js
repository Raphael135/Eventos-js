let frutas = ["maçã", "banana", "uva"];
// console.log(frutas);
// console.log(frutas[1]);

// console.log(frutas.length);

frutas.pop();
// console.log(frutas);

frutas.shift();
// console.log(frutas);

let lista = ["a", "b"];

lista.push("c");
// console.log(lista);

lista.unshift("z");
// console.log(lista);

let numeros = [10, 20, 30, 40];

// indexOf() → retorna a posição do elemento
// console.log(numeros.indexOf(20));
// console.log(numeros.indexOf(99)); // -1 (não encontrado)

// includes() → verifica se existe
// console.log(numeros.includes(30)); // true
// console.log(numeros.includes(99)); // false

let letras = ["a", "b", "c"];

// join() - junta em uma string
// console.log(letras.join("-"));

// concat() - junta arrays
let maisLetras = letras.concat(["d", "e"]);
// console.log(maisLetras); // Ele juntou o array letras com o maisLetras

let nums = [3, 1, 4, 2];
// console.log(nums);

// reverse() - inverte a ordem
nums.reverse();
// console.log(nums);

// sort() - ordena como strings por padrão
nums.sort();
// console.log(nums);

// Para ordenar números corretamente
nums.sort((a, b) => a - b);
// console.log(nums);

let numeros1 = [5, 2, 9, 1];

numeros1.sort((a, b) => {
  // console.log(`Comparando ${a} e ${b}`);
  return a - b;
});

// forEach() Executa uma função para cada elemento
let nomes = ["Ana", "Bruno", "Carlos"];
nomes.forEach((nome, i) => {
  // console.log(`${i}: ${nome}`);
});

// map() Cria um novo array transformando os elementos
let numeros2 = [1, 2, 3, 4];
let dobrados = numeros2.map((n) => n * 2);
// console.log(dobrados); // [2, 4, 6]

// filter() Cria um novo array apenas com os elementos que passarem no teste
let idades = [15, 22, 30, 17];
let adultos = idades.filter((idade) => idade >= 18);
//console.log(adultos);

// find() Retorna o primeiro elemnto que satisfaz a condição
let listaNum = [5, 10, 15];
let encontrado = listaNum.find((n) => n > 8);
// console.log(encontrado);

// Reduce() Acumula os valores do array em um único resultado
let valores = [1, 2, 3, 4];
let soma = valores.reduce((total, n) => total + n, 0);
console.log(soma);
