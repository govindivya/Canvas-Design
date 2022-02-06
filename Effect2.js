const canvas1 = document.getElementById("canvas1");
const ctx = canvas1.getContext("2d");
const ParticlesArray = [];
let hue = 0;

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

window.addEventListener("resize", function() {
    canvas1.width = window.innerWidth;
    // canvas1.height = window.innerHeight;
    canvas1.height=500;

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

// function init() {
//     for (let i = 0; i <= 100; i++) {
//         ParticlesArray.push(new Particle());
//     }

// }
// init();

function handleParticle() {
    for (let i = 0; i < ParticlesArray.length; i++) {
        ParticlesArray[i].update();
        ParticlesArray[i].draw();

        // this new loop added here  to give consetation effect
        for (let j = i; j < ParticlesArray.length; j++) {
            const dx = ParticlesArray[i].x - ParticlesArray[j].x;
            const dy = ParticlesArray[i].y - ParticlesArray[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 50) {
                ctx.beginPath();
                ctx.moveTo(ParticlesArray[i].x, ParticlesArray[i].y);
                ctx.lineTo(ParticlesArray[j].x, ParticlesArray[j].y);
                ctx.strokeStyle = ParticlesArray[i].color;
                ctx.lineWidth = 0.5;
                ctx.stroke();
                ctx.closePath();
            }

        }
        if (ParticlesArray[i].radius <= 0.6) { //new feature added
            ParticlesArray.splice(i, 1);

        }


    }
}

function animate() {
    ctx.clearRect(0, 0, canvas1.width, canvas1.height);
    // ctx.fillStyle = 'rgba(0,0,0,0.1)'; //new added line
    // ctx.fillRect(0, 0, canvas1.width, canvas1.height); //new added line
    handleParticle();
    // hue++;
    requestAnimationFrame(animate);
}
animate();
console.log(canvas1);