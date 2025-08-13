function eventoClick() {
  document.body.style.backgroundColor = "blue";
}

function eventoDblClick() {
  alert("Evento de clique duplo!");
}

function viraVermelho() {
  let div = document.getElementById("teste");
  div.style.backgroundColor = "red";
}

function voltaAzul() {
  let div = document.getElementById("teste");
  div.style.backgroundColor = "blue";
}

  const valor = document.querySelector("#itens");

  valor.addEventListener("change", () => {
    if (itens.value == 1) {
      console.log("Você escolheu o valor 1");
    } else if (itens.value == 2) {
      console.log("Você escolheu o valor 2");
    } else if (itens.value == 3) {
      console.log("Você escolheu o valor 3");
    } else {
      console.log("Você escolheu o valor 4");
    }
  });

function teclaPressionada() {
  let input = document.getElementById("campoTexto").value;
  console.log(input);
}
