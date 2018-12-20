/*
requrire ();
fs
require();
fs.existsSync();
fs.readFileSync();
fs.writeFileSync();
fs.appendFileSync();
JSON.stringify();
JSON.parse():
*/

var fs = require('fs');

var text = "Hi, I would like to save this file";
var fileName = "output.txt";

var doesFileExist = fs.existsSync(fileName);

if (doesFileExist) {
    console.log( "File already exist!");
    
    var contents = fs.readFileSync(fileName, "utf8")
    console log("Existing file contains the following: ");
    console.log (contents); 
    
} else { 
    console.log("File does not exist!");
    console.log ("Creating  File");
    
    fs.writeFileSync(fileName, text, "utf8");