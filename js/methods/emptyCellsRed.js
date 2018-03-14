// function to make empty cells red
$(document).ready(function(){

$('#showtable td').each(function() {
         if ($(this).text() == "") {
                $(this).css ( "background-color", "red");
         }
});
});
