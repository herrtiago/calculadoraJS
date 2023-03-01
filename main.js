let numeroActual = "";
let operacionActual = "";
let resultado = "";


function operador(op) {
  if (op === "AC") {
    numeroActual = "";
    operacionActual = "";
    resultado = "";
    actualizarPantalla();
  } else if (op === "=") {
    resultado = realizarOperacion();
    numeroActual = resultado;
    actualizarPantalla();
  } else {
    operacionActual = op;
    resultado = parseFloat(numeroActual);
    numeroActual = "";
    actualizarPantalla();
  }
}


function actualizarPantalla() {
  document.getElementById("labelNumero").innerHTML = numeroActual;
  document.getElementById("labelOperacion").innerHTML = operacionActual;
  document.getElementById("resultado").innerHTML = resultado;
}
function realizarOperacion() {
  let res = 0;
  switch (operacionActual) {
    case "+":
      res = parseFloat(resultado) + parseFloat(numeroActual);
      break;
    case "-":
      res = parseFloat(resultado) - parseFloat(numeroActual);
      break;
    case "*":
      res = parseFloat(resultado) * parseFloat(numeroActual);
      break;
    case "/":
      if (parseFloat(numeroActual) !== 0) {
        res = parseFloat(resultado) / parseFloat(numeroActual);
      } else {
        res = "Error: división entre cero";
      }
      break;
    default:
      res = parseFloat(numeroActual);
      break;
  }
  return res;
}



document.querySelectorAll("#botones button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "+" || button.value === "-" || button.value === "*" || button.value === "/") {
      operador(button.value);
    } else {
      numeroActual += button.value;
      actualizarPantalla();
    }
  });
});
