let listaCompras = ["arroz", "feijão", "macarrão"];

// 2 -
listaCompras.push("Carne", "Salada");
console.log(listaCompras);

// 3 -
listaCompras.unshift("Farofa");
console.log(listaCompras);

// 4 -
listaCompras.pop();
console.log(listaCompras);

// 5 -
listaCompras.shift();
console.log(listaCompras);

// 6 -
console.log(listaCompras.includes("feijão"));

// 7 -
let listaM = listaCompras.filter((item) =>
  item.startsWith("m")
);
console.log(listaM);

// 8 -
console.log(listaCompras.join(" - "));
