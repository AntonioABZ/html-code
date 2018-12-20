

var fs = require('fs');

var text = "console.log('Hola');"; 


//.existSync();

var doesItExist = fs.existSync("main.js");



//.readFile()'
fs.readFile("main.js", "utf8", function ()  {
    console.log("I finished reading the file!");
} );

console.log("Need to do something after readFile.");


//.readFileSync();
var contents = fs.readFileSync("main.js);

fs.writeFileSync("madeByJS.js"), text, "utf8");
