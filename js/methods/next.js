$(document).ready(function(){
  $("#next").click(function(){
    document.getElementById("next").style.visibility ="hidden";

//window.location.assign("step2.php");

//Function to delete table
function deleteTable(){
  var element = document.getElementById("showtable");
  element.parentNode.removeChild(element);
}
deleteTable();

var currentStep = document.getElementById("step").innerHTML;
var currentSteptNew = Number(currentStep) + 1;
document.getElementById("step").innerHTML = currentSteptNew;

if (currentSteptNew===2){
//load next import content
$.ajax({    //create an ajax request to php/showCSV/showcsv2.php
        type: "GET",
        url: "showcsv2.php",
        dataType: "html",   //expect html to be returned
        success: function(response){
            $("#importcontent").html(response);
            //alert(response);
        }
});
document.getElementById("previous").style.visibility = "visible";

}else if (currentSteptNew===3){
  //load next import content
  $.ajax({    //create an ajax request to php/showCSV/showcsv2.php
          type: "GET",
          url: "showcsv3.php",
          dataType: "html",   //expect html to be returned
          success: function(response){
              $("#importcontent").html(response);
              //alert(response);
          }
  });
  document.getElementById("previous").style.visibility ="visible";
}else if (currentSteptNew===4){
  document.getElementById("importeddata").style.visibility ="visible";
  document.getElementById("importfiles").style.visibility = "visible";
}



});
});




//  var next= function(value){
//
//   if(value = "firstNext") {
// window.location.assign("step2.php");
// }
//
// }
