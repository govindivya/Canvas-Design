const canvas1 = document.getElementById("canvas1");
const ctx = canvas1.getContext("2d");
const ParticlesArray = [];
let hue = 0;
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
window.addEventListener("resize", function() {
    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
});
const mouse = {
    x: 100,
    y: 100,
};
canvas1.addEventListener("click", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i <= 20; i++) {
        ParticlesArray.push(new Particle());
    }

});


class Particle {
    constructor() {


        this.color = 'hsl(' + (Math.random() * 360 + 1) + ' ,100%,50%)';
        this.radius = Math.abs(Math.random() * 10) + 10;
        this.x = Math.random() * 1000;
        this.y = Math.random() * 500;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;

    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

// function init() {
//     for (let i = 0; i <= 200; i++) {
//         ParticlesArray.push(new Particle());
//     }

// }
// init();

function handleParticle() {
    for (let i = 0; i < ParticlesArray.length; i++) {
        ParticlesArray[i].update();
        ParticlesArray[i].draw();



    }


}


function animate() {
    ctx.clearRect(0, 0, canvas1.width, canvas1.height);
    // ctx.fillStyle = 'rgba(0,0,0,0.1)'; //new added line
    // ctx.fillRect(0, 0, canvas1.width, canvas1.height); //new added line
    handleParticle();
    requestAnimationFrame(animate);
}
animate();