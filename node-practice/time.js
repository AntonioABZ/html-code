

//// setTimeout( CALLBACK FUNCTION ,  TIME IN MILLISECONDS   );


setTimeout( function ()  {
    
    setTimeout(function() {
        console.log("Takes 5 seconds")
    })
    
    console.log ("Took 13 seconds");
}, 10000 );