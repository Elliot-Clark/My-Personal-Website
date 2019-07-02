var pattern = Trianglify({
    cell_size: 200,
    x_colors: ['#000000', '#4CAFE8', '#FFFFFF'],
    y_colors: 'match_x',
    stroke_width: 111.51,
    seed: 'byttg',
    width: window.innerWidth,
    height: window.innerHeight
});
document.body.appendChild(pattern.canvas());

    