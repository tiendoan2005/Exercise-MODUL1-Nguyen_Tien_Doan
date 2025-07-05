class Mouse {
    status;
    sound_mouse;

    constructor(name, weight, speed) {
        this.name_mouse = name;
        this.weight_mouse = weight;
        this.speed_mouse = speed;
    }

    getStatus() {
        if (this.status) {
            alert("Chuột sống");
        } else {
            alert("Chuột chết");
        }
    }

    Die() {
        return this.status = false;
    }

    noDie() {
        return this.status = true;
    }

    callMouse(sound) {
        this.sound_mouse = sound;
        alert(this.name_mouse);
    }
}

class Cat {
    sound_cat;

    constructor(name, weight, speed, mouse) {
        this.name_cat = name;
        this.weight_cat = weight;
        this.speed_cat = speed;
        this.mouse = mouse;
    }

    getWeightCat() {
        return this.weight_cat;
    }

    setSoundCat(sound_cat) {
        this.sound_cat = sound_cat;
    }

    getSoundCat() {
        alert(this.sound_cat);
    }

    actionCat(sound) {
        this.sound_cat = sound;
        alert(this.sound_cat);
    }

    catchTheMouse() {
        if (this.mouse.speed_mouse < this.speed_cat) {
            alert("Mèo đã bắt được chuột");
        } else {
            alert("Mèo không bắt được chuột")
        }
    }

    eatTheMouse() {
        if (this.mouse.status) {
            this.weight_cat = this.weight_cat + this.mouse.weight_mouse;
            this.mouse.status = false;
            alert("Chuột đã bị mèo ăn")
        }
    }
}

let Jerry = new Mouse("Jerry", 10, 100);
let Tom = new Cat("Tom", 20, 200, Jerry);

Jerry.noDie();
console.log("Khối lượng ban đầu của Tom: " + Tom.getWeightCat());
Tom.catchTheMouse();
Tom.eatTheMouse();
console.log("Khối lượng của Tom sau khi ăn Jerry: " + Tom.getWeightCat());