'use strict'

var pattern = Trianglify({
    cell_size: 50,
    x_colors: ['#000000', '#4CAFE8', '#FFFFFF'],
    y_colors: 'random',
    stroke_width: 2.51,
    seed: 'null',
    width: window.innerWidth,
    height: window.innerHeight + 1
});
var trianglifyBackground = document.getElementById("trianglifyBackground");
trianglifyBackground.appendChild(pattern.canvas());
