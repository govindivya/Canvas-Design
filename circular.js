var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
class Ball {
    constructor() {
        this.xc = 500;
        this.yc = 200;
        this.time = 0;
        this.velocity = 0
        this.initialAngle = Math.PI / 2;
        this.angle = 0;
        this.ballRadius = 30;
        this.circleRadius = 400;
        this.x = this.xc - this.circleRadius * Math.sin(this.initialAngle);
        this.y = this.yc + this.circleRadius * Math.cos(this.initialAngle);
        this.color = 'hsl(' + (Math.random() * 360) + ' ,100%,50%)';

    }
    update() {
        this.angle = this.initialAngle * Math.cos(Math.sqrt(4 / this.circleRadius) * this.time);
        this.time+=0.5;
        this.x = this.xc + this.circleRadius * Math.cos(this.angle + Math.PI / 2);
        this.y = this.yc + this.circleRadius * Math.sin(this.angle + Math.PI / 2);
        this.draw();

    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.ballRadius, 0, 2 * Math.PI, false);
        c.fillStyle = this.color;
        c.fill();
        c.strokeStyle = 'green';
        c.stroke();
        c.closePath();

        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.xc, this.yc);
        c.strokeStyle = 'white';
        c.stroke();
    }

}
var ball = new Ball();
var cent = new Ball();
cent.x = 500;
cent.y = 200;
cent.ballRadius = 10;
cent.color = 'red';

console.log(cent);


function animate() {

    c.clearRect(0, 0, canvas.width, canvas.height);
    ball.update();
    cent.draw();
    requestAnimationFrame(animate);

}

animate();