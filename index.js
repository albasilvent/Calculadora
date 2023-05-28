// Creamos variables que almacenen cada uno de los números según el botón clickado

const pantalla = document.querySelector("#pantalla");
const AC = document.querySelector("#ac");
const CE = document.querySelector("#ce");
const potencia = document.querySelector("#potencia");
const division = document.querySelector("#division");
const multiplicacion = document.querySelector("#multiplicacion");
const resta = document.querySelector("#resta");
const suma = document.querySelector("#suma");
const igual = document.querySelector("#igual");
const punto = document.querySelector("#punto");
const cero = document.querySelector("#cero");
const uno = document.querySelector("#uno");
const dos = document.querySelector("#dos");
const tres = document.querySelector("#tres");
const cuatro = document.querySelector("#cuatro");
const cinco = document.querySelector("#cinco");
const seis = document.querySelector("#seis");
const siete = document.querySelector("#siete");
const ocho = document.querySelector("#ocho");
const nueve = document.querySelector("#nueve");

let contenido = "";
pantalla.textContent = "0";

function reset() {
    contenido = "";
    pantalla.textContent = "0";
}

function borrar() {
    contenido = contenido.slice(0, -1);
    pantalla.textContent = contenido === "" ? "0" : contenido;
}

cero.addEventListener("click", (event) => {
    if (contenido === "0") {
        return;
    }
    contenido += "0";
    pantalla.textContent = contenido;
});

uno.addEventListener("click", (event) => {
    if (contenido === "0") {
        contenido = "";
    }
    contenido += "1";
    pantalla.textContent = contenido;
});

dos.addEventListener("click", (event) => {
    if (contenido === "0") {
        contenido = "";
    }
    contenido += "2";
    pantalla.textContent = contenido;
});

tres.addEventListener("click", (event) => {
    if (contenido === "0") {
        contenido = "";
    }
    contenido += "3";
    pantalla.textContent = contenido;
});

cuatro.addEventListener("click", (event) => {
    if (contenido === "0") {
        contenido = "";
    }
    contenido += "4";
    pantalla.textContent = contenido;
});

cinco.addEventListener("click", (event) => {
    if (contenido === "0") {
        contenido = "";
    }
    contenido += "5";
    pantalla.textContent = contenido;
});

seis.addEventListener("click", (event) => {
    if (contenido === "0") {
        contenido = "";
    }
    contenido += "6";
    pantalla.textContent = contenido;
});

siete.addEventListener("click", (event) => {
    if (contenido === "0") {
        contenido = "";
    }
    contenido += "7";
    pantalla.textContent = contenido;
});

ocho.addEventListener("click", (event) => {
    if (contenido === "0") {
        contenido = "";
    }
    contenido += "8";
    pantalla.textContent = contenido;
});

nueve.addEventListener("click", (event) => {
    if (contenido === "0") {
        contenido = "";
    }
    contenido += "9";
    pantalla.textContent = contenido;
});

punto.addEventListener("click", (event) => {
    if (contenido === "0") {
        contenido = "";
    }
    contenido += ".";
    pantalla.textContent = contenido;
});

potencia.addEventListener("click", (event) => {
    contenido += "**";
    pantalla.textContent = contenido;
});

suma.addEventListener("click", (event) => {
    contenido += "+";
    pantalla.textContent = contenido;
});

resta.addEventListener("click", (event) => {
    contenido += "-";
    pantalla.textContent = contenido;
});

multiplicacion.addEventListener("click", (event) => {
    contenido += "*";
    pantalla.textContent = contenido;
});

division.addEventListener("click", (event) => {
    contenido += "/";
    pantalla.textContent = contenido;
});

AC.addEventListener("click", (event) => {
    reset();
});

CE.addEventListener("click", (event) => {
    borrar();
});

igual.addEventListener("click", (event) => {
    let resultado = eval(contenido);
    pantalla.textContent = resultado;
    contenido = resultado;
});
// Según lo que hay en pantalla se hace la operación

// El resultado aparecen en la pantalla y la operación con su resultado se almacena en el historial

// El boton AC borra todo lo que hay dentro de pantalla

// El botón CE borra el útlimo dígito dentro de la pantalla
