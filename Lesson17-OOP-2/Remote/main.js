class Remote {
    constructor(id, tv) {
        this.id = id;
        this.tv = tv;
    }

    setChannel(channel) {
        this.tv.setChannelTV(channel);
    }

    setVolume(volume) {
        this.tv.setVolumeTV(volume);
    }
}

class TV {
    status;

    constructor(channel, volume) {
        this.channel = channel;
        this.volume = volume;
    }

    getStatus() {
        if (this.status) {
            console.log("TV đang bật")
        } else {
            console.log("TV đang tắt")
        }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

    getChannelTV() {
        return this.channel;
    }

    setChannelTV(newChannel) {
        this.channel = newChannel;
    }

    getVolumeTV() {
        return this.volume;
    }

    setVolumeTV(newVolume) {
        this.volume = newVolume;
    }
}

let SamSung = new TV(2, 10);
let remoteSamSung = new Remote(1, SamSung);

SamSung.turnOn();
SamSung.getStatus();
SamSung.setChannelTV(7);
console.log("Kênh ban đầu: " + SamSung.getChannelTV());
console.log("Âm lượng ban đầu: " + SamSung.getVolumeTV());

remoteSamSung.setChannel(3);
remoteSamSung.setVolume(12);
console.log("Sau khi chuyển kênh: " + SamSung.getChannelTV());
console.log("Sau khi tăng âm lượng: " + SamSung.getVolumeTV());

remoteSamSung.tv.turnOff();
SamSung.getStatus();


