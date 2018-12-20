function getVowels(str) {
  var vowelsCount = 0;

  //turn the input into a string
  var string = str.toString( "How many");

  //loop through the string
  for (var i = 0; i <= string.length - 1; i++) {

  //if a vowel, add to vowel count
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}





/*

var myWords = [
    "Hello",
    "Procedure",
    "entropy",
    "photosynthesis",
    ["hola", "como", "estas"]
    ];

isCapital(myWords[6]);
    
function isCapital(string) {

    var firstLetter = string[0];
    var isItCaps = ( firstLetter === firstLetter.toUpperCase() );
    console.log("Is the first letter of '" + string + "' capitalized? " + isItCaps);

}






var firstletter = myWords[0][0];

var isItCaps = (firstletter === firstletter.toUpperCase() );

console.log("Is the first letter of Hello" + isItCaps);

function myFuntion (){
    
}
for (var i = 0; i < myWords.length; i++) {
    
    var firstLetter = myWords[i][0];
    var isItCaps = ( firstLetter === firstLetter.toUpperCase() );
    console.log("Is the first letter of '" + myWords[i] + "' capitalized? " + isItCaps);

}











/*
function name should be vowel counter 
with one parameter that accepts a string 
returns the number of vowels in the current word 

Y is not counted 



Math.(random)

myFuntion("myName")

for loop
for(var i=)



//array [ ] 

//{}
//object 



Eddys code sample 
var myWords = [
    "Hello",
    "How",
    "Procedure",
    "Photosynthesis",
    "Entropy",
    "disambiguation",
    "inexactness",
    "ALUMINOSILICATES",
    "Supercalifragilisticexpialidocious"
    ];


var totalCaps = 0;
var totalLowerCase = 0;

for (var i = 0; i < myWords.length; i++) {
    
    console.log("Total vowels for " + myWords[i] + " is: " + vowelCounter(myWords[i]));
    
    if ( isCapital(myWords[i]) ) {
        totalCaps++;
    } else {
        totalLowerCase++;
    }
    
}

function isPalindrome(string) {
    
    var original = string.toLowerCase();
    
    
    
    var reversed = original.split();
    reversed = reversed.reverse();
    reversed = reversed.join();
    
    if (original == reversed) {
        return true;
    } else {
        return false;
    }
    
}


function isCapital(string) {
    var firstLetter = string[0];
    var isItCaps = ( firstLetter === firstLetter.toUpperCase() );
    return isItCaps;
}

// string = "Hi"
function vowelCounter(string) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    var vowelCount = 0;
    
    for (var i = 0; i < string.length; i++) {
        
        // Funny stuff going on string[i].toLowerCase();
        var currentLetter = string[i];
        currentLetter = currentLetter.toLowerCase();
        
        for (var e = 0; e < vowels.length - 1; e++) {
            if (currentLetter == vowels[e]) {
                vowelCount++;
                break;
            }
        }
    }
    
    return vowelCount;
}


// function name should be vowelCounter
// one parameter that accepts a string
// returns the number of vowels in the current word
// Y is not counted.



*/