class LightBulb {
    constructor() {
        this.isOn = false;
    }
    toggle() {
        this.isOn = !this.isOn;
        return this.isOn;
    }
}

class Switch {
    constructor(light) {
        this.light = light;
    }
    press() {
        return this.light.toggle();
    }
}

const bulb = new LightBulb();
const switchControl = new Switch(bulb);
const lightElement = document.getElementById("light");
const switchButton = document.getElementById("switchBtn");

switchButton.addEventListener("click", () => {
    const isOn = switchControl.press();
    lightElement.style.backgroundColor = isOn ? "yellow" : "gray";
});