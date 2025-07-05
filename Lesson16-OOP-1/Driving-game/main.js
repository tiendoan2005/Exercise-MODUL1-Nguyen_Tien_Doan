const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const car = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 30,
    height: 30,
    angle: 0,
    speed: 1,
    normalSpeed: 1,
    boostSpeed: 3
};

let obstacles = [];
let rewards = [];
let score = 0;
let gameOver = false;

function checkCollision(obj1, obj2) {
    return (
        obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.height > obj2.y
    );
}

function spawnObstacles(count = 5) {
    for (let i = 0; i < count; i++) {
        obstacles.push({
            x: Math.random() * (canvas.width - 40),
            y: Math.random() * (canvas.height - 40),
            width: 40,
            height: 40
        });
    }
}

function spawnRewards(count = 5) {
    let generated = 0;
    while (generated < count) {
        const reward = {
            x: Math.random() * (canvas.width - 20),
            y: Math.random() * (canvas.height - 20),
            width: 20,
            height: 20
        };

        let isOverlapping = obstacles.some(obs => checkCollision(reward, obs));
        if (!isOverlapping) {
            rewards.push(reward);
            generated++;
        }
    }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

function handleKeyDown(e) {
    if (e.ctrlKey) {
        car.speed = car.boostSpeed;
    }

    switch (e.key) {
        case "ArrowLeft":
            car.angle -= Math.PI / 12;
            break;
        case "ArrowRight":
            car.angle += Math.PI / 12;
            break;
        case "ArrowDown":
            car.angle += Math.PI;
            break;
    }
}

function handleKeyUp(e) {
    if (!e.ctrlKey) {
        car.speed = car.normalSpeed;
    }
}

function drawCar() {
    ctx.save();
    ctx.translate(car.x + car.width / 2, car.y + car.height / 2);
    ctx.rotate(car.angle);

    ctx.beginPath();
    ctx.arc(0, 0, car.width / 2, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, -car.height / 2);
    ctx.lineTo(0, -car.height / 2 + 10);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
}

function drawObstacles() {
    ctx.fillStyle = "red";
    obstacles.forEach(obs => {
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    });
}

function drawRewards() {
    ctx.fillStyle = "gold";
    rewards.forEach(reward => {
        ctx.fillRect(reward.x, reward.y, reward.width, reward.height);
    });
}

function update() {
    if (gameOver) return;

    car.x += Math.sin(car.angle) * car.speed;
    car.y -= Math.cos(car.angle) * car.speed;

    // ✅ Nếu đi ra ngoài canvas → đưa sang viền đối diện
    if (car.x < -car.width) {
        car.x = canvas.width;
    } else if (car.x > canvas.width) {
        car.x = -car.width;
    }

    if (car.y < -car.height) {
        car.y = canvas.height;
    } else if (car.y > canvas.height) {
        car.y = -car.height;
    }

    for (let obs of obstacles) {
        if (checkCollision(car, obs)) {
            gameOver = true;
            alert("🚗💥 Game Over!");
            return;
        }
    }

    rewards = rewards.filter(reward => {
        if (checkCollision(car, reward)) {
            score += 10;
            document.getElementById("score").textContent = `Điểm: ${score}`;
            return false;
        }
        return true;
    });

    if (rewards.length === 0) {
        spawnRewards(5);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawObstacles();
    drawRewards();
    drawCar();
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

// Khởi tạo
spawnObstacles();
spawnRewards();
loop();
