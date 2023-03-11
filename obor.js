// FIRST
console.log('obor.js checking in');

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    honk() {
        return "Beep!";
      }
  
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

// SECOND
class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 4;
    }
  
    honk() {
      return "Beebeep!";
    }
}

// THIRD
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 2;
    }
  
    revEngine() {
      return "VROOM!!";
    }
}

// FOURTH
class Garage {
    constructor(capacity) {
      this.capacity = capacity;
      this.vehicles = [];
    }
  
    add(vehicle) {
      if (!(vehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full!";
      }
      this.vehicles.push(vehicle);
      return "Vehicle added!";
    }
}