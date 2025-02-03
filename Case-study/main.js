let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let Slider = {
    x: 150,
    y: 400,
    width: 100,
    height: 10,
};

let speed = 10;

let ball = {
    x: 200,
    y: 50,
    radius: 10,
    color: "red",
    speedY: 0,
    gravity: 0.3,
    bounce: 1,
    speedX: 2
};

function resetBall() {
    ball.x = 50;
    ball.y = 50;
    ball.speedY = 0;
}

document.addEventListener("keydown", move);

function move(event) {
    if (event.key === "ArrowLeft" && Slider.x > 0) {
        Slider.x -= speed;
    }
    if (event.key === "ArrowRight" && Slider.x + Slider.width < canvas.width) {
        Slider.x += speed;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(Slider.x, Slider.y, Slider.width, Slider.height);

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.stroke();
}

function update() {
    ball.speedY += ball.gravity;

    ball.y += ball.speedY;
    ball.x += ball.speedX;

    if (ball.y + ball.radius >= canvas.height) {
        resetBall();
    }

    if (
        ball.y + ball.radius >= Slider.y &&
        ball.x >= Slider.x && ball.x <= Slider.x + Slider.width
    ) {
        ball.y = Slider.y - ball.radius;
        ball.speedY *= -ball.bounce;
    }

    if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= canvas.width) {
        ball.speedX *= -1;
    }

    draw();
    requestAnimationFrame(update);
}

// Bắt đầu game
update();
