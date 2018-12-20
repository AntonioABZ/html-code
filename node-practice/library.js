//length is a property of a function 

//mathify function

function add(num1, num2) {

    var sum = num1 + num2;
    
    return sum;
}

function subtract(num1, num2) {

    var difference = num1 - num2;
    
    return difference;
}

function multiply(num1, num2) {
    
    var product = num1 * num2;
    
    return product;
}

function divide(num1, num2) {
    
    var dividend = num1 / num2;
    
    return dividend;
}

function startsWithVowel(text) {
    
    var textAsArray = text.split("");
    
    var firstLetter = textAsArray[0];
    
    var vowels = ["a", "e", "i", "o", 'u'];
    
    for (var i = 0; i < vowels.length; i++) {
        
        if ( firstLetter ==  vowels[i] ) {
            return true;
        }
        
    }
    
    return false;
    
}

function countHello(text) {
    
    return text.toLowerCase().match(/hello/g).length;
    
}

function mathify(numb1, numb2) {
    
    var sum = numb1 + numb2;
    var product = numb1 * numb2;
    
    var result = sum + product;
    
    return result;
}


function exclaim(text) {
    
    var modifiedText = text + "!";

    return modifiedText;
}
function capitalize(string) {
    
    var arrayOfWords = string.split(" ");
    
    for (var i = 0; i < arrayOfWords.length; i++) {
        
        var arrayOfWord = arrayOfWords[i].split("");
        
        arrayOfWord[0] = arrayOfWord[0].toUpperCase();
        
        var combinedWord = arrayOfWord.join("");
        
        arrayOfWords[i] = combinedWord;
    }
    
    var sentence = arrayOfWords.join(" ");
    return sentence;
}

function isPalindrome(string) {
    
    var original = string.toLowerCase();
    var reversed = original.split("");
    reversed = reversed.reverse();
    reversed = reversed.join("");
    
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



function randomBoolean() {
    
    var number = Math.random();
    var number = Math.round( number );
    
    if (number === 1) {
        return true; 
    } else {
        return false;
    }
    
}


function randomCase(text) {
  
    var currentName = text;
    
    var nameAsArray = currentName.split('');
    
    for (var e = 0; e < nameAsArray.length; e++) {
      if (randomBoolean()) {
        nameAsArray[e] = nameAsArray[e].toUpperCase();
      } else {
          nameAsArray[e] = nameAsArray[e].toLowerCase();
      }
    }
  
  var nameString = nameAsArray.join('');
  
  return nameString;
}



function randomNumber() {
    
    var number = (Math.random()* 10) + 1;
    
    number = Math.floor(number);
    
    return number ;
}




module.exports = {
    exclaim: exclaim,
    mathify: mathify,
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply,
};