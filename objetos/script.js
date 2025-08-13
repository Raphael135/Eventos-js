const carro = {
  marca: "Chevrolet",
  modelo: "Onix",
  ano: 2022,
  placa: "ABC-1234",
  buzina: function () {
    alert("Biiiiiiiiiiiiiiiiii");
  },
  completo: function () {
    return console.log(
      `O carro escolhido foi o ${this.marca} ${this.modelo}, do ano ${this.ano}`
    );
  },
};

const jogo = new Object();
jogo.titulo = "Batlefield 6";
jogo.estudio = "EA";

// console.log(jogo.titulo);
// console.log(jogo.estudio);

function Pessoa(nome, idade, sexo) {
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;
}
const raphael = new Pessoa("Raphael", 22, "Masculino");

console.log(raphael);

// console.log(raphael.nome);
// console.log(raphael.idade);
// console.log(raphael.sexo);

// Deleta uma propriedade criada
delete raphael.sexo;

console.log(raphael);

const usuario = {
  nome: "Francisco",
  saudacao: function () {
    return `Olá, ${this.nome}!`;
  },
};

console.log(usuario.saudacao());
