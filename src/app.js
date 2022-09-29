/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generarCarta() {
    //aca generamos primero el array de palos de las cartas y luego lo aleatorizamos
    let palos = ["♦", "♥", "♠", "♣"];
    let paloAleatorio = palos[Math.floor(Math.random() * palos.length)];

    //aca generamos primero el array de numeros y letras de las cartas y luego lo aleatorizamos
    let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
    let numeroAleatorio = number[Math.floor(Math.random() * number.length)];

    //aca agregamos los elementos generados aleatoriamente con el Math a los divs correspondientes
    document.getElementById("palo-izq").innerHTML = paloAleatorio;
    document.getElementById("palo-der").innerHTML = paloAleatorio;
    document.getElementById("numero").innerHTML = numeroAleatorio;

    //aca le damos color a los simbolos y letras o numeros segun el palo que salga
    if (paloAleatorio == "♥" || paloAleatorio == "♦") {
      document.getElementById("palo-izq").style.color = "red";
      document.getElementById("palo-der").style.color = "red";
      document.getElementById("numero").style.color = "red";
    }
  }
  // aca llamamos a la funcion
  generarCarta();
  //aca agregamos funcionalida de barajar al boton
  document.getElementById("boton").addEventListener("click", generarCarta);
  setTimeout(generarCarta, 10000);

  document.getElementById("cambia-size").addEventListener("click", function() {
    let ancho = document.getElementById("ancho").value;
    document.getElementById("card").style.width = ancho + "px";

    if (ancho < 200) {
      document.getElementById("card").style.fontSize = "10px";
    }

    let largo = document.getElementById("largo").value;
    document.getElementById("card").style.height = largo + "px";

    if (largo < 400) {
      document.getElementById("card").style.fontSize = "10px";
    }

    console.log("funciona");
  });
};
