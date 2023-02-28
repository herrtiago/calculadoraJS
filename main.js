const input1 = document.getElementById("operador1");
const input2 = document.getElementById("operador2");
const result = document.getElementById("resultado");

function mostrar(resultado, inpt1, inpt2) {
  result.innerHTML = resultado;
  input1.innerText = inpt1;
  input2.innerText = inpt2;
}

function operador(operando) {
  let resultado;
  switch (operando) {
    case "+":
      resultado = +input1.value + +input2.value;
      break;
    case "-":
      resultado = +input1.value - +input2.value;
      break;
    case "*":
      resultado = +input1.value * +input2.value;
      break;
    case "/":
      resultado = +input1.value / +input2.value;
      break;
    case "AC":
      resultado = "";
      input1.value = "";
      input2.value = "";
      break;
    default:
      resultado = "";
      break;
  }
  mostrar(resultado, input1, input2);
}
