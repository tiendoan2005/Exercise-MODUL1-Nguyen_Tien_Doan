class ElectricLamp {
    constructor() {
        this.status = false;
    }

    turnOn() {
        this.status = true;
        log("💡 Đèn đang <span class='lamp-on'>bật</span>.");
    }

    turnOff() {
        this.status = false;
        log("💡 Đèn đang <span class='lamp-off'>tắt</span>.");
    }
}

// Lớp SwitchButton
class SwitchButton {
    constructor() {
        this.status = false;
        this.lamp = null;
    }

    connectToLamp(lamp) {
        this.lamp = lamp;
    }

    switchOn() {
        this.status = true;
        if (this.lamp) {
            this.lamp.turnOn();
        }
    }

    switchOff() {
        this.status = false;
        if (this.lamp) {
            this.lamp.turnOff();
        }
    }
}

function log(message) {
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += `<div>${message}</div>`;
}

function startToggle() {
    const lamp = new ElectricLamp();
    const button = new SwitchButton();
    button.connectToLamp(lamp);

    document.getElementById("log").innerHTML = ""; // reset log

    let count = 1;
    const interval = setInterval(() => {
        log(`<strong>Lần thứ ${count}:</strong>`);
        if (count % 2 === 1) {
            button.switchOn();
        } else {
            button.switchOff();
        }
        log("<hr>");
        count++;
        if (count > 10) clearInterval(interval);
    }, 500);
}