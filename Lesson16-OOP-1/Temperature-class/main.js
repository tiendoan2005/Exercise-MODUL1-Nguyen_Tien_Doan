class Temperature {
    constructor(Celcius) {
        if (Celcius < -273) {
            throw new Error("Nhiệt độ không thể nhỏ hơn -273°C");
        }
        this.Celcius = Celcius;
    }

    toFahrenheit() {
        return this.Celcius * 9 / 5 + 32;
    }

    toKelvin() {
        return this.Celcius + 273.15;
    }
}

function convertF() {
    const input = parseFloat(document.getElementById("inputC").value);
    const output = document.getElementById("output");

    if (isNaN(input)) {
        output.textContent = "Vui lòng điền số nhiệt độ hợp lệ!";
        return;
    }

    if (input < -273) {
        output.textContent = "Nhiệt độ không được nhỏ hơn -273°C";
        return;
    }

    const temp = new Temperature(input);
    output.textContent = `Nhiệt độ ${input}°C = ${temp.toFahrenheit().toFixed(2)}°F`;
}

function convertK() {
    const input = parseFloat(document.getElementById("inputC").value);
    const output = document.getElementById("output");

    if (isNaN(input)) {
        output.textContent = "Vui lòng nhập số hợp lệ!";
        return;
    }

    if (input < -273) {
        output.textContent = "Nhiệt độ không được nhỏ hơn -273°C";
        return;
    }

    const temp = new Temperature(input);
    output.textContent = `Nhiệt độ ${input}°C = ${temp.toKelvin().toFixed(2)} K`;
}
