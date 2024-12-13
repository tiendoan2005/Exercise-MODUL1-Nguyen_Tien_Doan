/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 20;
        console.log('Right: ' + this.left);
    }

    this.moveDown = function () {
        this.top += 20;
        console.log('Down: ' + this.top);
    }

    this.moveLeft = function () {
        this.left -= 20;
        console.log('Left: ' + this.left);
    }

    this.moveTop = function () {
        this.top -= 20;
        console.log('Top: ' + this.top);
    }
}

var hero = new Hero('https://vcdn1-vnexpress.vnecdn.net/2019/03/02/bai-toan-3768-1551057063-6906-1551496131.png?w=460&h=0&q=100&dpr=2&fit=crop&s=65apYx_JyjeKGKft6dcRQQ', 30, 30, 200);

// Biến trạng thái để theo dõi hướng di chuyển
var direction = "right";

function start() {
    if (direction === "right") {
        if (hero.left < window.innerWidth - hero.size) {
            hero.moveRight();
        } else {
            direction = "down"; // Chuyển hướng xuống
        }
    } else if (direction === "down") {
        if (hero.top < window.innerHeight - hero.size) {
            hero.moveDown();
        } else {
            direction = "left"; // Chuyển hướng sang trái
        }
    } else if (direction === "left") {
        if (hero.left > 0) {
            hero.moveLeft();
        } else {
            direction = "up"; // Chuyển hướng lên
        }
    } else if (direction === "up") {
        if (hero.top > 0) {
            hero.moveTop();
        } else {
            direction = "right"; // Quay lại hướng phải
        }
    }

    // Cập nhật vị trí quả bóng trên giao diện
    document.getElementById('game').innerHTML = hero.getHeroElement();

    // Lặp lại hàm sau 50ms
    setTimeout(start, 50);
}

start();
