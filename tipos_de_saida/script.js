let nome, lastName, nameFull;

nome = "Raphael";
lastName = "Rodolfo";
nameFull = nome + " " + lastName;

document.getElementById("text").innerHTML = nameFull;

class Pessoa {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  apresentar() {
    console.log(`Meu nome é ${this.name} e tenho ${this.age} anos.`);
  }
}

const pessoa1 = new Pessoa("Raphael", 22);
pessoa1.apresentar();
