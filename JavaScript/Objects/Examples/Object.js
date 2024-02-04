let car = {
    make: 'BMW',
    model: '2 Series Gran Coupe',
    year: 2022,
    color: 'blue',
    start: function() {
        console.log(this.make + ' ' + this.model + ' is started');
    },
    drive: function() {
        console.log(this.make + ' ' + this.model + ' is driving');
    }
};

// Accessing properties
console.log(car.make);      // Output: BMW
console.log(car['model']);  // Output: 2 Series Gran Coupe

// Calling methods
car.start();    // Output: BMW 2 Series Gran Coupe is started
car.drive();    // Output: BMW 2 Series Gran Coupe is driving