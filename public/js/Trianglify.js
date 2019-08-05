'use strict'

//#F2EDE2
let randomCellSize = Math.random() * (150 - 80) + 80;
var pattern = Trianglify({
    cell_size: randomCellSize,
    y_colors: ['#4CAFE8', '#A4D3E2', '#F4EEE1'],
    x_colors: ['#F4EEE1', '#F4EEE1'],
    stroke_width: 15,
    seed: 'null',
    width: window.innerWidth,
    height: window.innerHeight
});
var trianglifyBackground = document.getElementById("trianglifyBackground");
trianglifyBackground.appendChild(pattern.canvas());
