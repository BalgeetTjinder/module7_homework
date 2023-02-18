function ElectricalAppliance(name, power) {
    this.power = power;
    this.name = name;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function () {
    this.isPlugged = true;
    console.log(`прибор включен в розетку`);
};

ElectricalAppliance.prototype.unplug = function () {
    this.isPlugged = false;
    console.log(`прибор выключен из розетки`);
};

// -------------------------------------------------------------------------------

function Computer(name, weight, bitness, power) {
    ElectricalAppliance.call(this, name, power);
    this.weight = weight;
    this.bitness = bitness;
    this.isItOn = false;
}

Computer.prototype = Object.create(ElectricalAppliance.prototype);

Computer.prototype.turnOn = function () {
    this.isItOn = true;
    console.log(`${this.name} включен`);
};

Computer.prototype.turnOff = function () {
    this.isItOn = false;
    console.log(`${this.name} выключен`);
};

const ibmPC = new Computer("5150", 11000, 16, 400);

const potatoPC = new Computer("Potato", 1000, 4, 20);

// -------------------------------------------------------------------------------

function Lamp (name, power, color, weight, brightness) {
    ElectricalAppliance.call(this, name, power);
    this.color = color;
    this.weight = weight;
    this.brightness = brightness;
    this.power = power;
    lightIsOn = false;
} 

Lamp.prototype = Object.create(ElectricalAppliance.prototype);

Lamp.prototype.lightOn = function() {
    lightIsOn = true;
    console.log(`${this.name} включен(а)`)
}

Lamp.prototype.lightOf = function() {
    lightIsOn = false;
    console.log(`${this.name} выключен(а)`)
}

const ecoLamp = new Lamp("ecoLamp", 100, "yellow", 200, 10);

// -------------------------------------------------------------------------------

ibmPC.turnOn();
potatoPC.turnOn();
ecoLamp.lightOn();
console.log(ibmPC, potatoPC, ecoLamp)


