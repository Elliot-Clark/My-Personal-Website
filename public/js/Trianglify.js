'use strict'

var pattern = Trianglify({
    cell_size: 50,
    x_colors: ['#000000', '#4CAFE8', '#FFFFFF'],
    y_colors: 'match_x',
    stroke_width: 2.51,
    seed: 'byttg',
    width: window.innerWidth,
    height: window.innerHeight + 1
});
var trianglifyBackground = document.getElementById("trianglifyBackground");
trianglifyBackground.appendChild(pattern.canvas());
