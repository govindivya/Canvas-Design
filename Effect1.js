var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');
ParticlesArray = [];



// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.lineTo(50, 300);
// c.fillStyle = 'green';
// c.fill();
// c.fillStyle = 'green';
// c.stroke();
// c.beginPath();
// c.arc(300, 300, 100, 0, 2 * Math.PI, false);
// c.fillStyle = 'green';
// c.strokeStyle = 'red';

// c.stroke();
// c.fill();

const mouse = {
    x: null,
    y: null,
};

canvas.addEventListener("click", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i <= 2; i++) {
        ParticlesArray.push(new Particle());
    }

});

// canvas.addEventListener("mousemove", function(event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     for (let i = 0; i <= 5; i++) {
//         ParticlesArray.push(new Particle());
//     }


// });

class Particle {

    constructor() {
        this.radius = Math.abs(Math.random() * 30 + 30);
        this.color = 'hsl(' + (Math.random() * 360 + 1) + ' ,100%,50%)';
        this.speedX = Math.random() * 5 - 2;
        this.speedY = Math.random() * 3 - 1.5;
        this.x = mouse.x;
        this.y = mouse.y;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.speedY = -this.speedY;
        }

    }
    draw() {

        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
    }
}

function handleParticle() {
    for (let i = 0; i < ParticlesArray.length; i++) {
        ParticlesArray[i].update();
        ParticlesArray[i].draw();
    }
}

function animate() {

    c.fillStyle = 'rgba( 0,0,0,0.07)';

    c.fillRect(0, 0, canvas.width, canvas.height); //new added line to remove previous balls 
    handleParticle();
    requestAnimationFrame(animate);

}
animate();