 var canvas = document.querySelector('canvas');
 var c = canvas.getContext('2d');
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;


 window.addEventListener("resize", function() {
     canvas1.width = window.innerWidth;
     canvas1.height = window.innerHeight;
 });

 class Ball {
     constructor() {
         this.x = Math.random() * canvas.width;
         this.dy = 0;
         this.radius = Math.random() * 20 + 20;
         this.y = canvas.height * Math.random() / 2 + this.radius;
         this.color = 'hsl(' + (Math.random() * 360) + ' ,100%,50%)';;
         this.Count = 0;
     }

     update() {

         if (this.Count != 20) {
             if (this.y + this.radius >= canvas.height) {
                 this.dy *= -0.9;
                 this.Count++;
                 this.y = canvas.height - this.radius;
             }
             this.dy += 0.5;
             this.y += this.dy;
             this.draw();

         } else {
             this.y = canvas.height - this.radius;
             this.dy = 0;
             this.draw();

         }


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
     for (let i = 0; i < 20; i++) {
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

 canvas.addEventListener("click", function(event) {
     for (let i = 0; i < ArrayOfBalls.length; i++) {
         ArrayOfBalls[i].y = Math.random() * (canvas.height / 2) + ArrayOfBalls[i].radius;
         ArrayOfBalls[i].Count = 0;
     }

 });

 init();
 animate();