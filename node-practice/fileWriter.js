var fs = require('fs');

var parameters = process.arv;

if (fs. existsSync('entries.txt') == false) {
    fs.writeFileSync('entries.txt', '', 'utf8');
}

for (var i = 2; i < parameters.length; i++) {
    
    console.log("Arguments have been detected!");
    
    fs.appendFileSync('entries.txt', process.argv[i] + '\n','utf8' );

}    
  
  
  /*
    
var argumentA = process.argv[2]  
var parameters = process.argv;


//if (parameters.length > 2) {
if (argumentA) {  
    console.log("Arguments have been detected!");
    
    if (fs.existsSync('entries.txt')) {
        fs.appendFileSync('entries.txt', process.argv[2] + '\n', 'utf8');
    } else {
        fs.writeFileSync('entries.txt', process.argv[2] + '\n', 'utf8');
    }

    else {
        console.log('Your argument was saved to the entries.txt file!');
    } 

else {
    console.log('No arguments found.')
}




//argv[ ] =reads the imput by the user 
//fs to read and write files
/*
require();
fs.readFileSync();
fs.writeFileSync(); 
fs.appendFileSync();
JSON.stringify();
JSON.parse();
*/