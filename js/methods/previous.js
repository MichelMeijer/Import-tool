$(document).ready(function(){
  $("#previous").click(function(){
    //Function to delete table
    function deleteTable(){
      var element = document.getElementById("showtable");
      element.parentNode.removeChild(element);
    }
    deleteTable();

  });
  });
