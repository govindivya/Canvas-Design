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

canvas1.addEventListener("mousemove", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i <= 5; i++) {
        ParticlesArray.push(new Particle());
    }


});

// function drawCircle() {
//     ctx.fillStyle = "yellow";
//     ctx.beginPath();
//     ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
//     ctx.fill();
// }
class Particle {
    constructor() {
        let str = "RYGPB";
        let code = Math.floor(Math.random() * 5);
        let colorCode = str[code];
        // this.color = 'hsl(' + hue + ' ,100%,50%)'; //new line added
        this.color = 'hsl(' + (Math.random() * 360 + 1) + ' ,100%,50%)';




        this.x = mouse.x; //new feature added
        this.y = mouse.y; //new feature added
        this.radius = Math.abs(Math.random() * 5) + 5;
        // this.x = Math.random() * 1000;
        // this.y = Math.random() * 500;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;

    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.radius > 0.5)
            this.radius -= 0.1;

    }
    draw() {
        // ctx.fillStyle = this.color; // commented
        // new added line
        ctx.fillStyle = this.color;

        ctx.opacity = 0.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}


function handleParticle() {
    for (let i = 0; i < ParticlesArray.length; i++) {
        ParticlesArray[i].update();
        ParticlesArray[i].draw();
        if (ParticlesArray[i].radius <= 0.6) { //new feature added
            ParticlesArray.splice(i, 1);

        }


    }
}

function animate() {
    // ctx.clearRect(0, 0, canvas1.width, canvas1.height);
    ctx.fillStyle = 'rgba(0,0,0,0.1)'; //new added line
    ctx.fillRect(0, 0, canvas1.width, canvas1.height); //new added line
    handleParticle();
    // hue++;
    requestAnimationFrame(animate);
}
animate();