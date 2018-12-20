// prompt( );

console.log("Hello how was your week end?" );



isItRaining == "rainy";
haveUmbrella == "rainy"; 
sunnyDay == "sunny";
foggyDay == "foggy";


var isItRaining = process.argv[2];
var haveUmbrella = process.argv[3];

    if (isItRaining) {
    console.log("It was raining!");
    
        if (haveUmbrella ) 
        console.log("Congratulations for having an umbrella, hope you went for a walk.");
        }    
    
    else { 
    
        console.log("Splashing in the rain can be fun!");
    }    

var sunnyDay = process.argv[4];
var foggyDay = process.argv[5];

    if (sunnyDay) {
    console.log("It's going to be a sunny day, if out in the sun make sure to use sunscreen");
    
    }

    else {
        console.log("It's a foggyday today hope you have a sweater or jacket.");

    }

// var sum = isItRaining + haveUmbrella + sunnyDay ;

console.log("Sounds like it was a good weekend for you!");

console.log("How was the weather in SF this weekend?" + sunnyDay);
console.log("Well you can always make the best of the day and addapt. "+ foggyDay  );









// if (sunscreen) {
// console.log("Hope you had sunblock, it was sunny");    
// }

// }else ("and a hat to block the sun") 
    
    
    
    
//     { 
//         console.log("sunny weekend!");
//     }

// else { 

//     if (isItRaining) {

//         console.log("Since it was raining!");
//     }
// else {

    

//     if (haveUmbrella) {
//         console.log("Congratulations for having an umbrella, now go for a walk" + isItRaining);
//     }    

// else {
    
//     console.log("It's sunny, lets go take a walk!");
// }



// var sum = 



//  firstNumber = parseInt(firstNumber);
//  secondNumber = parseInt(secondNumber);
 
 
//  console.log("------------");
//  console.log("Output:");
//  console.log("The first number you typed in is :" + firstNumber);
//  console.log("The second number you typed in is :"+ secondNumber);
 
//  var sum = firstNumber + secondNumber;
 
 
//  console.log("The sum of the first and second number is: " + sum);








// For your project, you are to write a dynamic story that changes based on what you put in. 

// You will be using the process.argv variable to access the information that the user puts in, 

// then you will use if statements to run different console.log statements based on what the user put in. 

// The minimum for this story program should be two nested if-else statements.

// An example would be the following commands that provides 4 unique stories as output:

// node story.js sunny sunscreen

// node story.js sunny no_sunscreen

// node story.js raining umbrella

// node story.js raining no_umbrella

// node story.js sunny no_sunscreen

// node story.js raining umbrella

// node story.js raining no_umbrella