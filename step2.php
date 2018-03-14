<!DOCTYPE html>
<html>
<head>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!--- script to change cursor when hoover over cell and make clicked cell orange --->
<script src="js/methods/clickedCellColor.js"></script>

<!---function to make empty cells red --->
<script src="js/methods/emptyCellsRed.js"></script>

<!-- stylesheet -->
<link rel="stylesheet" type="text/css" href="css/style.css">

<!-- Retrieve table info and sent it with Ajax to PHP -->
<script src="js/objects/getTableToPHP/getTableToPHP1.js"></script>
</head>



</head>

<body>

<!---Open csv from server --->
<?php
include 'php/showCSV/showcsv2.php';
?>
<!---End open csv from server --->
<br><br>

<button id="taketable">Import data</button>

<br><br>

<p>Imported rows:<span id="rowcount"></span></p>
<p>Row 1:<span id="row1"></span></p>
<p>Row 2:<span id="row2"></span></p>
<p>Row 3:<span id="row3"></span></p>
<p>Row 4:<span id="row4"></span></p>
<p>Row 5:<span id="row5"></span></p>
<p>Row 6:<span id="row6"></span></p>
<p>Row 7:<span id="row7"></span></p>
<p>Row 8:<span id="row8"></span></p>
<p>Row 9:<span id="row9"></span></p>
<p>Row 10:<span id="row10"></span></p>
<p>Row 11:<span id="row11"></span></p>
<p>Row 12:<span id="row12"></span></p>
<p>Row 13:<span id="row13"></span></p>
<p>Row 14:<span id="row14"></span></p>
<p>Row 15:<span id="row15"></span></p>
<p>Row 16:<span id="row16"></span></p>
<p>Row 17:<span id="row17"></span></p>
<p>Row 18:<span id="row18"></span></p>
<p>Row 19:<span id="row19"></span></p>
<p>Row 20:<span id="row110"></span></p>

<br><br><br><br>


<script src="js/methods/findDeleteEmptyRows.js"></script>

</body>

</html>
