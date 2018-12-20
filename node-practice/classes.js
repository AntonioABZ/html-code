class Animal {
    //capitalize 
    constructor(legs, eyes, nose, tail, ears) {
    //use key word "this" to      
        
        
        this.legs = legs;
        this.eyes = eyes;
        this.tail = tail;
        this.ears = ears;
    }
    cry(sound) {
        this.sound = sound;
        console.log(this.sound);
    }
}

class Pet extends Animal { 
    constructor(legs, eyes, tail, ears, cuteness, name, guardian, address) {
    super (legs, eyes, tail, ears, cuteness, name, guardian, address)
    }
var bobcat = new Animal(4, 2, 1, 2);
var fox = new Animal(4, 2, 1, 2);
var golden carp = new Animal(0, 2, 1, 0);    

console.log (.eyes);    
console.log (cat.eyes);

bobcat.cry("meow");
fox.bark("whoff") 

var fox9 = new fox(4, 2, 1, 2, 91, "Zuzu", "David", "123 San Francisco St.");




console.log(fox9.guardian);
console.log(fox9.name);
console.log(fox9.getAddress());

fox.cry();


// trains cargo, pasangers, bullet, city, 
// lyft uses javascript language