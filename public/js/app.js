'use strict'

// document.body.addEventListener('click', event => {
//     let ele = [document.getElementById("header"), document.getElementById("trianglifyBackground")];
//     for (let x = 0; x < ele.length; x++) {
//         ele[x].classList.add('header-transition');
//     }
//     document.getElementById("profile").style.display = "block";
//     document.getElementById("experiences").style.display = "block";
//     document.getElementById("projects").style.display = "block";
//   });


let arr = ["Hi, I'm Elliot Clark. I'm a Front End Web Developer!"];
let arrLetters = arr[0].split('');

let logo = [];
const logoAnimation = () => {
    logo.push(arrLetters[0]);
    arrLetters.shift();
    document.getElementById('logo').innerHTML = logo.join("");
    if (arrLetters.length > 0) {
        setTimeout(logoAnimation, 42); 
    }
}

setTimeout(function(){
    logoAnimation();
 }, 3500);
