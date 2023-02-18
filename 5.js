class ElectricalAppliance {
    constructor(name, power) {
      this.power = power;
      this.name = name;
      this.isPlugged = false;
    }
  
    plugIn() {
      this.isPlugged = true;
      console.log(`${this.name} включен в розетку`);
    }
  
    unplug() {
      this.isPlugged = false;
      console.log(`${this.name} выключен из розетки`);
    }
  }
  
  class Computer extends ElectricalAppliance {
    constructor(name, weight, bitness, power) {
      super(name, power);
      this.weight = weight;
      this.bitness = bitness;
      this.isItOn = false;
    }
  
    turnOn() {
      this.isItOn = true;
      console.log(`${this.name} включен`);
    }
  
    turnOff() {
      this.isItOn = false;
      console.log(`${this.name} выключен`);
    }
  }
  
  class Lamp extends ElectricalAppliance {
    constructor(name, power, color, weight, brightness) {
      super(name, power);
      this.color = color;
      this.weight = weight;
      this.brightness = brightness;
      this.lightIsOn = false;
    }
  
    lightOn() {
      this.lightIsOn = true;
      console.log(`${this.name} включен(а)`);
    }
  
    lightOff() {
      this.lightIsOn = false;
      console.log(`${this.name} выключен(а)`);
    }
  }
  
  const ibmPC = new Computer("5150", 11000, 16, 400);
  const potatoPC = new Computer("Potato", 1000, 4, 20);
  const ecoLamp = new Lamp("ecoLamp", 100, "yellow", 200, 10);
  
  ibmPC.turnOn();
  potatoPC.turnOn();
  ecoLamp.lightOn();
  
  console.log(ibmPC, potatoPC, ecoLamp);
  