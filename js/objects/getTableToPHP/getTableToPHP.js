//import loop to send all table data to process.php and from there to import it in MySQL
$(document).ready(function(){

  $("#taketable").click(function(){
    var currentStep = document.getElementById("step").innerHTML;
    var currentSteptNew = Number(currentStep);
    document.getElementById("next").style.visibility ="visible";

//Step 1
//check which step to see which data so send
  if (currentSteptNew===1){
var importDataTable = document.getElementById('importeddata');

	  //confirm option needs to be build!!
	  confirm("Are you sure you want to import your data?");

    var column = 1;
    var rowTotal = 0;

    var firstname;
    var lastName;
    var clubMemberId;
    var email;
    var inactive;

    var table = document.getElementById('table');


    for (var r = 0, n = table.rows.length; r < n; r++) {

        for (var c = 0, m = table.rows[r].cells.length; c < m && c < 6; c++) {
          if (c === 0) {
                    firstname +=  table.rows[r].cells[0].innerHTML;
                  }else if (c === 1){
                    lastName += table.rows[r].cells[1].innerHTML;
                  }else if (c === 2){
                    clubMemberId += table.rows[r].cells[2].innerHTML;
                  }else if (c === 3){
                    email += table.rows[r].cells[3].innerHTML;
                  }else if (c === 4){
                    inactive += table.rows[r].cells[4].innerHTML;
                  } else {
                  };
          column=column +1;
        }

var rowOverview = firstname + " " + lastName + " " + clubMemberId +  " " + email +  " " + inactive;

if(rowTotal){
document.getElementById(("row" + rowTotal)).innerHTML = rowOverview;
};


          rowTotal = rowTotal + 1;


if(r >= 1 && firstname) {
		$.ajax({
        type: 'POST',
        url: '../php/process/process.php',
        data: { text1: firstname, text2: lastName, text3:clubMemberId , text4: email, text5: inactive},
        success: function(response) {
            $('#result').html(response);
        }
		});
		}


    var row = importDataTable.insertRow(rowTotal);

    if(rowTotal > 1 && rowTotal < 25){
    for (q = 0; q <= 19; q++){
      var cell= row.insertCell(q);
      if (q===0){
      cell.innerHTML =firstname;
    }else if(q===1){
      cell.innerHTML =lastName;
    }else if(q===2){
      cell.innerHTML =clubMemberId;
    }else if(q===3){
      cell.innerHTML =email;
    }else if(q===4){
      cell.innerHTML =inactive;
    }
    }
     }



          firstname = "";
          lastName = "";
          clubMemberId = "";
          email = "";
          inactive = "";

    }

//Step 2
//check which step to see which data so send
} else if(currentSteptNew===2){
  var importDataTable = document.getElementById('importeddata');

  //confirm option needs to be build!!
  confirm("Are you sure you want to import your data?");


  var column = 1;
  var rowTotal = 0;

  var clubMemberId;

  var birthday;
  var gender;
  var memberSince;
  var phone;
  var mobile;
  var street;
  var houseNumber;
  var zip;
  var city;
  var country;
  var notes;

  var table = document.getElementById('table');

  var overviewCount =1;

  for (var r = 0, n = table.rows.length; r < n; r++) {


      for (var c = 0, m = table.rows[r].cells.length; c < m && c < 14; c++) {
    if (c === 2){
                  clubMemberId += table.rows[r].cells[2].innerHTML;
                }else if (c === 3) {
                  birthday +=  table.rows[r].cells[3].innerHTML;
                }else if (c === 4){
                  gender += table.rows[r].cells[4].innerHTML;
                }else if (c === 5){
                  memberSince += table.rows[r].cells[5].innerHTML;
                }else if (c === 6){
                  phone += table.rows[r].cells[6].innerHTML;
                }else if (c === 7){
                  mobile += table.rows[r].cells[7].innerHTML;
                }else if (c === 8){
                  street += table.rows[r].cells[8].innerHTML;
                }else if (c === 9){
                  houseNumber += table.rows[r].cells[9].innerHTML;
                }else if (c === 10){
                  zip += table.rows[r].cells[10].innerHTML;
                }else if (c === 11){
                  city += table.rows[r].cells[11].innerHTML;
                }else if (c === 12){
                  country += table.rows[r].cells[12].innerHTML;
                }else if (c === 13){
                  notes += table.rows[r].cells[13].innerHTML;
                }else {
                };

        column=column +1;
      }

      var rowOverview = " " + birthday + " " + gender + " " + memberSince + " " + phone + " " + mobile + " " + street + " " + houseNumber + " " + zip + " " + city + " " + country + " " + notes;

      if(rowTotal){
      document.getElementById(("row" + rowTotal)).innerHTML += rowOverview;
      };


       rowTotal = rowTotal + 1;


  if(r >= 1) {
  $.ajax({
      type: 'POST',
      url: '../php/process/process1.php',
      data: { text1: birthday, text2: gender, text3: memberSince , text4: phone, text5: mobile, text6: street, text7: houseNumber, text8: zip, text9: city, text10: country, text11: notes, text12:clubMemberId},
      success: function(response) {
          $('#result').html(response);
      }
  });
  }

if(rowTotal > 1 && rowTotal < 25){
  for (var x = 1, z = importDataTable.rows.length; x < z; x++) {
      for (var y = 5, k = importDataTable.rows[x].cells.length; y < k && y > 4; y++) {
        importDataTable.rows[overviewCount].cells[5].innerHTML = birthday;
        importDataTable.rows[overviewCount].cells[6].innerHTML = gender;
        importDataTable.rows[overviewCount].cells[7].innerHTML = memberSince;
        importDataTable.rows[overviewCount].cells[8].innerHTML = phone;
        importDataTable.rows[overviewCount].cells[9].innerHTML = mobile;
        importDataTable.rows[overviewCount].cells[10].innerHTML = street;
        importDataTable.rows[overviewCount].cells[11].innerHTML = houseNumber;
        importDataTable.rows[overviewCount].cells[12].innerHTML = zip;
        importDataTable.rows[overviewCount].cells[13].innerHTML = city;
        importDataTable.rows[overviewCount].cells[14].innerHTML = country;
        importDataTable.rows[overviewCount].cells[15].innerHTML = notes;
}
}
}

  clubMemberId = "";
  birthday = "";
  gender = "";
  memberSince = "";
  phone = "";
  mobile= "";
  street = "";
  houseNumber = "";
  zip = "";
  city = "";
  country = "";
  notes = "";

  overviewCount = overviewCount + 1;
  }

//Step 3
  //check which step to see which data so send
}else if(currentSteptNew===3){
  var importDataTable = document.getElementById('importeddata');
  //confirm option needs to be build!!
  confirm("Are you sure you want to import your data?");

  var column = 1;
  var rowTotal = 0;

  var clubMemberId;

  var bankAccountNumber;
  var bankAccountOwner;
  var bankBicCode;
  var bankPlace;

  var overviewCount =1;

  var table = document.getElementById('table');


  for (var r = 0, n = table.rows.length; r < n; r++) {


      for (var c = 0, m = table.rows[r].cells.length; c < m && c < 7; c++) {
      if (c === 2){
                clubMemberId += table.rows[r].cells[2].innerHTML;
                  }else if (c === 3) {
                  bankAccountNumber +=  table.rows[r].cells[3].innerHTML;
                }else if (c === 4){
                  bankAccountOwner += table.rows[r].cells[4].innerHTML;
                }else if (c === 5){
                  bankBicCode += table.rows[r].cells[5].innerHTML;
                }else if (c === 6){
                  bankPlace += table.rows[r].cells[6].innerHTML;
                } else {
                };
        column=column +1;

      }


      var rowOverview = " " + bankAccountNumber + " " + bankAccountOwner + " " + bankBicCode + " " + bankPlace;

      if(rowTotal){
      document.getElementById(("row" + rowTotal)).innerHTML += rowOverview;
      };

        rowTotal = rowTotal + 1;

 if(r >= 1) {
  $.ajax({
      type: 'POST',
      url: '../php/process/process2.php',
      data: { text1: bankAccountNumber, text2:bankAccountOwner, text3: bankBicCode, text4: bankPlace, text5: clubMemberId},
      success: function(response) {
          $('#result').html(response);
      }
  });
  }

  if(rowTotal > 1 && rowTotal < 25){
    for (var x = 1, z = importDataTable.rows.length; x < z; x++) {
        for (var y = 16, k = importDataTable.rows[x].cells.length; y < k && y > 15; y++) {
          importDataTable.rows[overviewCount].cells[16].innerHTML = bankAccountNumber;
          importDataTable.rows[overviewCount].cells[17].innerHTML = bankAccountOwner;
          importDataTable.rows[overviewCount].cells[18].innerHTML = bankBicCode;
          importDataTable.rows[overviewCount].cells[19].innerHTML = bankPlace;

  }
  }
  }

        clubMemberId = "";
        bankAccountNumber = "";
        bankAccountOwner = "";
        bankBicCode = "";
        bankPlace = "";

overviewCount = overviewCount + 1;

  }

}

});

});
