/*global $*/

$( document ).ready( function () {

    var counter=11;

    var imgCss=function(){
      $("#im"+counter).css({
          "border-radius": "25px",
          "width": "650px",
          "margin-left": "10px",
          "margin-top": "10px",
          "cursor":"pointer"
      });
      
    }
    for(counter; counter>0;counter--){
        if(counter%2==0){
            $("#images").prepend("<img id='im"+counter+"' src='images/"+counter+".jpeg' /><br>");
            imgCss();
        }else{
            $("#images").prepend("<img id='im"+counter+"' src='images/"+counter+".jpeg' />");
            imgCss();
        }
    }
    
    
    $("#backImage").css({
      "display": "none",
      "position": "fixed",
      "z-index": "1",
      "padding-top": "20px",
      "left": "0",
      "top": "0",
      "width": "100%",
      "height": "100%",
      "overflow": "auto",
      "background-color": "255,255,255",
      "background-color": "rgba(255,255,255)",
    });
    
    $("img").click(function(){
        $("#backImage").fadeToggle("slow");

        var nameImage = $(this).attr('src');
        $("#backImage").prepend("<div id='x'>x</div><img id='showImage' src='"+ nameImage +"'/>");


      
        
        
        $("#showImage").css({
            "border-radius": "10px",
            "margin": "auto",
            "display": "block",
            "width": "100%",
            "max-width": "600px",
            "margin-button":"20px"
        });




        $("#x").css({
          "position": "absolute",
          "top": "20px",
          "right": "88px",
          "color": "#40E0D0",
          "font-size": "80px",
          "font-weight": "bold",
          "cursor":"pointer"
        });
      

        $("#x").click(function(){
            $("#backImage").fadeToggle("slow",function() {
                $("#showImage").remove();
            });
        });
    });
});
