let trianglifyHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;

var pattern = Trianglify({
    cell_size: 100,
    x_colors: ['#000000', '#4CAFE8', '#FFFFFF'],
    y_colors: 'match_x',
    stroke_width: 51.51,
    seed: 'byttg',
    width: window.innerWidth,
    height: trianglifyHeight
});
document.body.appendChild(pattern.canvas());

    