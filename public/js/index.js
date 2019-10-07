//'use strict'

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

 'use strict'
//Code is written to redraw the Trianglify background whenever the screen size changes
console.log("Test");

const render = () => {
    if (document.getElementsByTagName("canvas")[0]) {
        document.getElementsByTagName("canvas")[0].remove();
    }
    let pattern = Trianglify({
        cell_size: Math.random() * (150 - 80) + 80,
        y_colors: ['#4CAFE8', '#A4D3E2', '#F4EEE1'],
        x_colors: ['#F4EEE1', '#F4EEE1'],
        stroke_width: Math.random() * (17 - 5) + 5,
        seed: 'null',
        width: window.innerWidth,
        height: window.innerHeight
    });
    const trianglifyBackground = document.getElementById("trianglifyBackground");
    trianglifyBackground.appendChild(pattern.canvas());
}
window.onload = render;
window.onresize = render; 