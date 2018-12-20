var fs = require('fs');

var myObject = {
    name: "Antonio",
    isValid: false,
    registered: true,
    location: "SF",
};

console.log(typeof myObject);

var converted = JSON.stringify(myObject);

console.log(typeof converted);

fs.writeFileSync('example.json', converted, 'utf8');

var contents = fs.readFileSync('example.json', 'utf8');

console.log(contents);

var readData = JSON.parse(contents);

console.log(typeof readData);

console.log(readData.name);