function adicionar() {
    let number = Number(document.getElementById("number").innerHTML);
    number++;
    document.getElementById("number").innerHTML = number;
  }
  function diminuir() {
    let content = document.getElementById("number");
    let numero = Number(content.innerHTML);
    numero--;
    content.innerHTML = numero;
  }
  