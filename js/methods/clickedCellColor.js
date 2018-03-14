//script to change cursor when hoover over cell and make clicked cell orange.
$(document).ready(function(){
 $("table:has(td)").mouseover(function(e) {
 $(this).css("cursor", "pointer");
 });

 $("table:has(td)").click(function(e) {
 $("table td").removeClass("highlight");
 var clickedCell= $(e.target).closest("td");
 clickedCell.addClass("highlight");
 });
 });
