/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var canvas = document.getElementsByTagName('canvas')[0],
        ctx = null,
        grad = null,
        body = document.getElementsByTagName('body')[0],
        color = 0,
        colorful = false;

if (canvas.getContext('2d')) {
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 600, 600);
    ctx.save();
    // Create radial gradient
    grad = ctx.createRadialGradient(0, 0, 0, 0, 0, 100);
    grad.addColorStop(0, '#fff');
    grad.addColorStop(1, '#000');

    // assign gradients to fill
    ctx.fillStyle = grad;

    // draw 600x600 fill
    ctx.fillRect(0, 0, 600, 600);
    ctx.save();

   function draw(event) {
        ctx.clearRect(0, 0, 600, 600);
        var width = window.innerWidth,
                height = window.innerHeight,
                x = event.clientX,
                y = event.clientY,
                rx = 600 * x / width,
                ry = 600 * y / height;

        var xc = ~~(256 * x / width);
        var yc = ~~(256 * y / height);

        grad = ctx.createRadialGradient(rx, ry, 0, rx, ry, 100);


        if (colorful)
            grad.addColorStop(1, 'rgb(' + xc + ', ' + (255 - xc) + ', ' + yc + ')');
        else {
            grad.addColorStop(0, 'transparent');
            grad.addColorStop(1, '#000')
        }
        // ctx.restore();

        ctx.fillStyle = grad;

        ctx.fillRect(0, 0, 600, 600);
        // ctx.save();
    };
    body.onmousemove = function(event){
        draw(event);
    };
    body.on('touchmove',function(event){
        draw(event);
    })
}