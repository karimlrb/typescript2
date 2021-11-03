"use strict";
// Type Assertion
// let txt: string;
// txt = "java";
//Assertion : Le ! veut dire ça ne peut pas retourner null
// const form:HTMLFormElement = document.querySelector('form')!;
// console.log(form.children);
// Type casting 
var form = document.querySelector('form');
// Ici form1 est Element|null car on peut assigner 1 classe à tout les éléments, pas assez rpécis
// const form1 = document.querySelector('.form-container')as HTMLFormElement;
var input = document.getElementById('input');
form.addEventListener('submit', handleSubmit);
// Il faut donner le type de qui est Event//// E MAJUSCULE à event
function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMITTED");
}
// EVenement click
window.addEventListener('click', handleClick);
// Ici Event ne contient pas clientX clientY, c'est MouseEvent
// function handleClick(e: Event){
//     console.log(e.clientX, e.clientY);
// }
function handleClick(e) {
    console.log(e.clientX, e.clientY);
}
// querySelectorAll ne renvoie pas nullet forcement un NodeList 
// Pas besoin de AS, pas
var paragraphsList = document.querySelectorAll('p');
