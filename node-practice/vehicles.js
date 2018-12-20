class Vehicle {  

    constructor(color,year, make, model, wheels, registration, vin) {
        this.color = color;
        this.year = color;
        this.make = make;
        this.model = model;
        this.wheels = wheels;
        this.registration = registration;
        this.vin = vin;
    }
    
    //Getters 
    getColor() {return this.color;}
    getYear() {return this.year;}
    getMake() {return this.make;}
    getModel() {return this.model;}
    getWheels() {return this.wheels;}
    getRegistration() {return this.registration;}
    getVin() {return this.vin;}
     
     //setters
     setColor(color) {
         this.color =color;
     }
     
     setRegistration(registration) {
         this.registration = registration;
     }
     
}     
 
 class Bus extends Vehicle{
     
     constructor(color,year, make, model, wheels, registration, vin, topSpeed, tankSize, fuel, mpg) {
         super( color,year, make, model, wheels, registration, vin);
         this.topSpeed = topSpeed;
         this.tankSize = tankSize;
         this.fuel = fuel;
         this.mpg = mpg;
     }
     
     getTopSpeed() {
         return this.topSpeed;
     }
     
     getTankSize() {
         return this.tankSize;
     }
     getMPG() {
         return this.mpg;
     }
     getFuel() {
         return this.fuel;
     }
  timeToDest(mph, distance){
      if ( mph <= this.topspeed) {
        console.log ("It will take" + (distance/ mph) + "hours to go" + distance + "miles.");
          
  }   
  
     drive(miles) {
         
         if ( (this.fuel * this.mpg) > miles ) {
            console.log("You have " + this.fuel + " gallons of gas in the tank!");
            console.log("You drive " + this.make + " for " + miles + " miles.");
            this.fuel = this.fuel - (miles / this.mpg);
            console.log("You have " + this.fuel + " gallons of gas left.");
        } else {
            console.log("You don't have enough fuel to go that far!");
            console.log("You have " + this.fuel + " gallons of gas in the tank!");
        }
    }
    
    refuel(gallons) {
        
        if ( (this.tankSize - this.fuel) > gallons) {
            this.fuel = this.fuel + gallons;
            console.log( "You filled your tank with an additional" + gallons + "gallons of gas.")
        } else {
            console.log("Sorry, there is no room in the tank for that much fuel.");
        }
    }   

 } 



var guagua = new Bus("yellow", 2000, "Guagua", "Cuba", 16, "987653798dgsjdb846", "284589a", 90, 13, 50, 60);

guagua.drive(40);
guagua.drive(90);
guagua.refuel(2);
guagua.drive(140);
guagua.refuel(50);
 
    



//https://ide.c9.io/eagarcia/dev-practice