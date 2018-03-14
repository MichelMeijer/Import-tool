<?php
$filename = 'uploads/test5.csv';
if (file_exists($filename)) {

echo '<div id="showtable">
<h2>Step 3: Check payment data</h2><br>
<table id="table">';


$f = fopen("uploads/test5.csv", "r");
$totalcolumns = 20;
$r =0; // total amount of rows
while (($line = fgetcsv($f)) !== false) {
	$c =0; //total amount of columns
	if($line)    $r++;

		if($r > 9 && $r < 30 && $r !== 11) {

        echo "<tr>";


        foreach ($line as $cell) {

			//Laat geen lege rijen zien.

/*
			if (empty($cell)) {
        continue;
    }
	*/


/*			if(!trim($cell)) continue;
  $tmp = explode("\t", $cell);
  */
			$c = $c + 1;
			$i = $i + 1;
			// echo $c;

			// Decide how much columns to show till 5 for first till 20 for everything
			if($c <= 3 || ($c > 16 && $c <= 20)){
			if ($i<= $totalcolumns){
				echo "<th>" . htmlspecialchars($cell) . "</th>";


			}
			else{
                echo "<td contenteditable='true'>" . htmlspecialchars($cell) . "</td>";
			}
			}


        }
		echo "</tr>\n";
		}


}
// echo $r . " ";
// echo $i . " ";
fclose($f);
echo '</table></div>
<script type="text/javascript" src="js/methods/findDeleteEmptyRows.js"></script>
<script type="text/javascript" src="js/methods/emptyCellsRed.js"></script>';
}
?>
