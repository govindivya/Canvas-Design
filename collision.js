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
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = Math.random() * 2 + 2;
        this.speedY = Math.random() * 2 + 2;
        this.radius = Math.random() * 8 + 5;
        this.color = 'hsl(' + (Math.random() * 360) + ' ,100%,50%)';

    }
    update() {
        if (this.y > canvas.height || this.y <= 0) {
            this.speedY = -this.speedY;
        }
        if (this.x > canvas.width || this.x <= 0) {
            this.speedX = -this.speedX;
        }
        for (let i = 0; i < ArrayOfBalls.length; i++) {
            if (this != ArrayOfBalls[i]) {
                let dx = Math.abs(this.x - ArrayOfBalls[i].x);
                let dy = Math.abs(this.y - ArrayOfBalls[i].y);
                let d = Math.sqrt(dx * dx + dy * dy);
                if (d <= this.radius) {
                    let v1x = this.speedX;
                    let v1y = this.speedY;
                    this.speedX = ArrayOfBalls[i].speedX;
                    this.speedY = ArrayOfBalls[i].speedY;
                    ArrayOfBalls[i].speedX = v1x;
                    ArrayOfBalls[i].speedY = v1y;


                }
            }
        }
        this.y += this.speedY;
        this.x += this.speedX;
        this.draw();
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        c.fillStyle = this.color;
        c.fill();
        c.strokeStyle = 'green';
        c.stroke();
        c.closePath();
    }

}
var ArrayOfBalls = [];

function init() {
    for (let i = 0; i < 300; i++) {
        ArrayOfBalls.push(new Ball());
    }
}

function animate() {

    c.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < ArrayOfBalls.length; i++) {
        ArrayOfBalls[i].update();
    }
    requestAnimationFrame(animate);

}

init();
animate();