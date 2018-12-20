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
 
 class electicBus extends Vehicle{
     
     constructor(color,year, make, model, wheels, registration, vin, topSpeed, batterySize, charTime, mpc) {
         super( color,year, make, model, wheels, registration, vin);
         this.topSpeed = topSpeed;
         this.batterySize = batterySize;
         this.charTime = charTime;
         this.mpc = mpc;
     }
     
     getTopSpeed() {
         return this.topSpeed;
     }
     
     getbatterySize() {
         return this.tankSize;
     }
     getMPC() {
         return this.mpg;
     }
     getcharTime() {
         return this.charTime;
     }
  timeToDest(mph, distance){
      if ( mph <= this.topspeed) {
        console.log ("It will take" + (distance/ mph) + "hours to go" + distance + "miles.");
      } else {
            console.log("This vehicle has a top speed of " + this.topSpeed + "MPH, you cannot go that fast!");
        }
    }
  
     drive(miles) {
         
         if ( (this.fuel * this.mpc) > miles ) {
            console.log("You have " + this.fuel + " gallons of gas in the tank!");
            console.log("You drive " + this.make + " for " + miles + " miles.");
            this.fuel = this.fuel - (miles / this.mpc);
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



var guagua = new electicBus("yellow", 2000, "Guagua", "Cuba", 16, "987653798dgsjdb846", "284589a", 90, 13, 50, 60);

guagua.drive(40);
guagua.drive(90);
guagua.recharge(2);
guagua.drive(140);
guagua.recharge(50);
 
    



//https://ide.c9.io/eagarcia/dev-practice