"use strict";//активируем ECMAScript, т.е. современные правила языка
let message = prompt("Как тебя зовут?", "Петя");
  if (typeof message==='string'){
    alert(`Добро пожаловать ${message} !`);}
    else {
    alert("Привет гость!");
    }
