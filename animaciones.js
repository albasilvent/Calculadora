"use strict";

const historial = document.querySelector(".historial");
const modal = document.querySelector(".modal-ext");
const main = document.querySelector("main");

historial.addEventListener("click", (event) => {
    console.log("HOLA");
    main.style = "background-color:black; margin: 0 10px";
});
