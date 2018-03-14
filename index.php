<!DOCTYPE html>
<html>
<head>
<!-- Title -->
<title>Import tool</title>

<!-- Viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- JQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!--- script to change cursor when hoover over cell and make clicked cell orange --->
<script src="js/methods/clickedCellColor.js"></script>

<!---function to make empty cells red --->
<script type="text/javascript" src="js/methods/emptyCellsRed.js"></script>

<!-- stylesheet -->
<link rel="stylesheet" type="text/css" href="css/style.css">

<!-- Retrieve table info and sent it with Ajax to PHP -->
<script type="text/javascript" src="js/objects/getTableToPHP/getTableToPHP.js"></script>

<!-- Import everything -->
<script type="text/javascript" src="js/objects/getTableToPHP/import.js"></script>

<!-- Function to click to next import slide -->
<script type="text/javascript" src="js/methods/next.js"></script>
</head>


<body>
<!-- Form to choose csv file to upload and to upload the file -->
<form action="php/upload.php" method="post" enctype="multipart/form-data">
    Select CSV file to upload:
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="Upload" name="submit">
</form>
<p id="step">1</p>
<br><br>

<!---Open csv from server --->
<?php
require_once 'php/showCSV/showcsv.php';
?>
<!---End open csv from server --->
<table id="importeddata">
  <tr>
    <th>firstname</th>
    <th>lastname</th>
    <th>club_member_id</th>
    <th>email</th>
    <th>inactive</th>
    <th>BIRTHDAY</th>
    <th>GENDER</th>
    <th>MEMBER_SINCE</th>
    <th>PHONE</th>
    <th>MOBILE</th>
    <th>STREET</th>
    <th>HOUSE_NUMBER</th>
    <th>ZIP</th>
    <th>CITY</th>
    <th>COUNTRY</th>
    <th>NOTES</th>
    <th>BANK_ACCOUNT_NUMBER</th>
    <th>BANK_ACCOUNT_OWNER</th>
    <th>BANK_BIC_CODE</th>
    <th>BANK_PLACE</th>
  </tr>
</table>

<br><br>

<div class="buttonline">
<button id="previous">Previous</button>
<button id="taketable">Save data</button>
<!-- <button onclick="next("firstNext");">Next</button> -->
<button id="next">Next</button>
<button id="importfiles">Import everything</button>
</div>

<br><br><br><br><br><br><br><br><br>
<!-- Imported data -->





<br><br><br><br><br><br><br><br>
<p id="response"></p>
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
<p>Row 20:<span id="row20"></span></p>
<br><br><br><br>

<!-- <h4>Search and Delete Empty rows</h4> -->
<!-- <p id="demorows"></p> -->
<!-- <p id="demo">Testveld</p> -->
<!-- <p>Td data:</p> -->
<!-- <p id="tddata"></p> -->


<!-- Find empty rows and delete them -->
<script type="text/javascript" src="js/methods/findDeleteEmptyRows.js"></script>

</body>
</html>
