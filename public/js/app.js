//'use strict'



//Logo Animation
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


 //Code for Lazy Loading all images
 const targets = document.querySelectorAll('img');
 const lazyLoad = target => {
   const io = new IntersectionObserver((entries, observer) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         const img = entry.target;
         const src = img.getAttribute('data-lazy');
         img.setAttribute('src', src);
         img.classList.add('fade');
         observer.disconnect();
       }
     });
   });
   io.observe(target)
 };
 targets.forEach(lazyLoad);
