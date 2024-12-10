/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function selecionadorExcusaRandom(lista) {
  let random = Math.random() * lista.length;
  let numeroRedondeado = Math.floor(random);
  return lista[numeroRedondeado];
}

let excuse =
  selecionadorExcusaRandom(who) +
  " " +
  selecionadorExcusaRandom(action) +
  " " +
  selecionadorExcusaRandom(what) +
  " " +
  selecionadorExcusaRandom(when);

let excuseGenerator = document.querySelector("#excuseGenerator");
excuseGenerator.textContent = excuse;
console.log(excuseGenerator);
