function location() {

var woonplaats = document.getElementById("woonplaats").value;

switch (woonplaats) {
    case "amstelveen":
        locationAm();
        break;
    case "badhoevedorp":
        poelBa();
        break;

div2.innerHTML = "Jouw gemiddelde reistijd is: <b>" + tijd + "</b> km/h";




function locationAm() {

    var e = document.getElementById("bestemming");
    var eindbest = e.options[e.selectedIndex].value;
    var x = document.getElementById("bestemming");
    var vervoer = x.options[e.selectedIndex].value;


        if (eindbest == ameer) {
            var distance = 14500 ; }

            else if (eindbest === groning) {
            var distance = 183000 ; }

            else if(eindbest === zwolle) {
            var distance = 114000 ;
            }


        if (vervoer === kuruma ) {
            var time = distance / 28 ;
        }

        else if (vervoer === jitensha) {
         var time = var distance / 4 ;

         }

         else if ( vervoer === densha) {
         var time = var distance / 56 ;

         }

         else if (vervoer === scoot) {
         var time = var distance / 8 ; }




    div2.innerHTML = "your travel time will be <b>" + time + "</b> km/h";

}

function locationBa() {


    var e = document.getElementById("bestemming");
    var eindbest = e.options[e.selectedIndex].value;
    var x = document.getElementById("bestemming");
    var vervoer = x.options[e.selectedIndex].value;


     if (eindbest == ameer) {
            var distance = 13000 ; }

            else if (eindbest === groning) {
            var distance = 40000 ; }

            else if(eindbest === zwolle) {
            var distance = 600000 ;
            }


        if (vervoer === kuruma ) {
            var time = distance / 28 ;
        }

        else if (vervoer === jitensha) {
         var time = var distance / 4 ;

         }

         else if ( vervoer === densha) {
         var time = var distance / 56 ;

         }

         else if (vervoer === scoot) {
         var time = var distance / 8 ; }


    div2.innerHTML = "your travel time will be: <b>" + time + "</b>";