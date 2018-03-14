// Find empty rows and delete them.
function findAndDelete() {

    var x = document.getElementById("table").rows[0].cells.length;
    // document.getElementById("demo").innerHTML = "Found " + x + " cells in the first tr element.";



	for (var q = 0, p = table.rows.length; q < p; q++) {
		$emptycell = 0;
		x = document.getElementById("table").rows[q].cells.length;
		// document.getElementById("demorows").innerHTML += "Row: " + q + " Found " + x + " cells in the this tr element." + "<br>";



		for (var d = 0, u = table.rows[q].cells.length; d < u; d++) {
			$tdvalue = table.rows[q].cells[d].innerHTML;
			if ($tdvalue==""){
				$emptycell += 1;
			};
		// document.getElementById("tddata").innerHTML +=	"This is a table from row " + q + " value: " + $tdvalue;
		}

		// document.getElementById("tddata").innerHTML +=	"Total empty cells: "  + $emptycell + "<br>";

		if ($emptycell === d){
		document.getElementById("table")
		table.deleteRow(q);

		q = q-1;
		}


}


}
findAndDelete();
