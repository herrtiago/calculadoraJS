const input = document.getElementById("input");
const result = document.getElementById("resultado");
const operacion = document.getElementById("operacion");
const cero = document.getElementById("cero");
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
let input1 = 0;

function mostrar(resultado, inpt) {
  result.innerHTML = resultado;
  input.innerHTML = inpt;
}

function operador(operando) {
  let resultado;
  switch (operando) {
    case "+":
      resultado = +input1 + +input.value;
      operacion.innerHTML="+";
      break;
    case "-":
      resultado = +input1 - +input.value;
      operacion.innerHTML="-";
      break;
    case "*":
      resultado = +input1 * *+input.value;
      operacion.innerHTML="+";
      break;
    case "/":
      resultado = +input1 / +input.value;
      operacion.innerHTML="/";
      break;
    case "AC":
        operacion.innerHTML="";
      resultado = "";
      input.value = "";
      break;
    default:
      resultado = "";
      break;
  }
  mostrar(resultado, input.value);
}

cero.addEventListener("click", function () {
  input.innerHTML = cero.value;
});
uno.addEventListener("click", function () {
  input.innerHTML = uno.value;
});
dos.addEventListener("click", function () {
  input.innerHTML = dos.value;
});
tres.addEventListener("click", function () {
  input.innerHTML = tres.value;
});
cuatro.addEventListener("click", function () {
  input.innerHTML = cuatro.value;
});
cinco.addEventListener("click", function () {
  input.innerHTML = cinco.value;
});
seis.addEventListener("click", function () {
  input.innerHTML = seis.value;
});
siete.addEventListener("click", function () {
  input.innerHTML = siete.value;
});
ocho.addEventListener("click", function () {
  input.innerHTML = ocho.value;
});
nueve.addEventListener("click", function () {
  input.innerHTML = nueve.value;
});
