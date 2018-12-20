/*var fs = require("fs");

var data = fs.readFileSync('data.csv', 'utf8');
// code to read exel file restData
var dataArray = data.split('\n');

dataArray.pop();

//objects have keys and values and is more user freindly

var entryData =dataArray[1].split (",");

class Entry {
    constructor(id, name, address, inspection_id, inspection_date, score, inspection_type, inspection_description, risk) {
      this.id = id;
      this.name = name;
      this.address = address;
      this.inspection_id = inspection_id;
      this.inspection_date = inspection_date;
      this.score = score;
      this.inspection_type = inspection_type;
      this.inspection_description = inspection_description;
      this.risk = risk;
    }
}
    
var entrySet = [];    
    
for (var i = 1; i < dataArray.length; i++) {   
    
    var currentData = dataArray[i].split(",");
    
    var exampleData = new Entry(
    parseInt(currentData[0]),
    currentData[0],
    currentData[1],
    currentData[2],
    currentData[11],
    currentData[12],
    currentData[13],
    currentData[14],
    currentData[16],
    currentData[17],
    );
    
    entrySet.push(currentEntry);
}

console.log(typeof entrySet[3249].score);


var meanScore = 0;

for (var i = 0; i < entrySet.length; i++) {

    if ( isNaN(entrySet[i].score) ) {
        console.log(entrySet[i].id + ": " + entrySet[i].score); 
    }
    
    meanScore = meanScore + parseInt
    (entrySet[i].score);

console.log(meanScore / entrySet.length);

/*HW use Regex to get rid of the commas on coordinates 
regex 101*/

var fs = require('fs');

var data = fs.readFileSync('data.csv', 'utf8');

var dataArray = data.split('\n');

// removes last entry because empty string.
dataArray.pop();

var entryData = dataArray[1].split(",");


var testData = dataArray[4].split(',');
console.log(dataArray[4]);
console.log(testData);

var testData2 = dataArray[3].split(',');
console.log(dataArray[3]);
console.log(testData2);

var testData3 = dataArray[2].split(',');
console.log(dataArray[2]);
console.log(testData3);

class Entry {
    constructor(id, name, address, inspection_id, inspection_date, score, inspection_type, inspection_description, risk) {
      this.id = id;
      this.name = name;
      this.address = address;
      this.inspection_id = inspection_id;
      this.inspection_date = inspection_date;
      this.score = score;
      this.inspection_type = inspection_type;
      this.inspection_description = inspection_description;
      this.risk = risk;
    }
}

var entrySet = [];


for (var i = 1; i < dataArray.length; i++) {
    
    var currentData = dataArray[i].split(",");
    
    var currentEntry = new Entry(
    parseInt(currentData[0]),
    currentData[1],
    currentData[2],
    currentData[11],
    currentData[12],
    currentData[13],
    parseInt(currentData[14]),
    currentData[16],
    currentData[17]
    );
    
    entrySet.push(currentEntry);
    
}

console.log(typeof entrySet[3249].score);


var meanScore = 0;


for (var i = 0; i < entrySet.length; i++) {
    
    if ( isNaN(entrySet[i].score) ) {
       // console.log(entrySet[i].id + ": " + entrySet[i].score);
    }
    
    meanScore = meanScore + parseInt(entrySet[i].score);
}
console.log(meanScore / entrySet.length);
