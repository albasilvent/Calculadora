"use strict";

const historial = document.querySelector(".historial");
const modal = document.querySelector(".modal-ext");
const input = document.querySelector("input");
const body = document.querySelector("body");
const main = document.querySelector("main");
const equis = document.querySelector("img#atras");
const li = document.querySelectorAll(".anim"); // devuelve un array, por eso hay que hacer un for each
const divAlba = document.querySelector(".alba");
const divJoshue = document.querySelector(".joshue");
const pAlba = document.querySelector(".nomAlba");
const pJoshue = document.querySelector(".nomJoshue");
const imgFooterAlba = document.querySelectorAll(".img");
const imgFooterJoshue = document.querySelectorAll(".img1");
const borrar = document.querySelector(".borrar");
const sectionHistorial = document.querySelector(".sectionHistorial");

historial.addEventListener("click", (event) => {
    modal.classList.toggle("hide");
});

input.addEventListener("click", (event) => {
    body.classList.toggle("modoOscuro");
});

equis.addEventListener("click", (event) => {
    modal.classList.toggle("hide");
});

li.forEach((li) => {
    li.addEventListener("click", () => {
        li.classList.add("animacion");
        setTimeout(() => {
            li.classList.remove("animacion");
        }, 200);
    });
});

divAlba.addEventListener("click", (event) => {
    pAlba.classList.toggle("hideDos");
    imgFooterAlba.forEach((elemento) => {
        elemento.classList.toggle("hideDos");
    });
});

divJoshue.addEventListener("click", (event) => {
    event.stopPropagation;
    pJoshue.classList.toggle("hideDos");
    imgFooterJoshue.forEach((elemento) => {
        elemento.classList.toggle("hideDos");
    });
});

borrar.addEventListener("click", (event) => {
    sectionHistorial.textContent = "";
});

