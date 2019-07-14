let trianglifyHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;

/* setInterval(function(){ 
        var pattern = Trianglify({
            cell_size: 1100,
            x_colors: ['#000000', '#4CAFE8', '#FFFFFF'],
            y_colors: 'match_x',
            stroke_width: 51.51,
            seed: 'byttg',
            width: window.innerWidth,
            height: trianglifyHeight
        });
        document.body.appendChild(pattern.canvas());
}, 3000); */


var pattern = Trianglify({
    cell_size: 40,
    x_colors: ['#000000', '#4CAFE8', '#FFFFFF'],
    y_colors: 'match_x',
    stroke_width: 51.51,
    seed: 'byttg',
    width: window.innerWidth,
    height: window.innerHeight
});
document.body.appendChild(pattern.canvas());


    