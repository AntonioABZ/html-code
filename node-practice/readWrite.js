//node packeges for project

var fs = require('fs');

//Write test.txt
//Check if file already exist.
var fileExist = fs.existsSync('test.txt');

//If exist, then add to it, otherwise create the file.
if (fileExist == false) {
    fs.writeFileSync('test.txt', 'Hello.\n','utf8');
} else {
    console.log("File exist already! Writing file to existing file!\n");
    fs.appendFileSync('test.txt', 'This is a new line!');
}

//read the file and print it.
var fileContents = fs.readFileSync('test.txt', 'utf8');

console.log("test.txt currently holds:");
console.log(fileContents);





//coolStuff.tenNumbers();


//math is foundational 
//Math.
//console



//node lets you test javascript without loging in to the consoel
//frequent comands used in javascript 
// nmp = node package manager
// 