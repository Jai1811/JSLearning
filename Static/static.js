class Car{

    static numberOfWheels = 4;

    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    static  getNumberOfWheels(){
        return Car.numberOfWheels;
    }
    

}

const myCar = new Car('Toyota', 'Corolla');

console.log(Car.getNumberOfWheels()); // Output: 4