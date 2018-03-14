$(document).ready(function(){
  $("#importfiles").click(function(){
    confirm("Are you sure you want to import your data?");
    var column = 1;
    var rowTotal = 0;

    var firstname;
    var lastName;
    var clubMemberId;
    var email;
    var inactive;
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
    var bankAccountNumber;
    var bankAccountOwner;
    var bankBicCode;
    var bankPlace;

var table = document.getElementById('importeddata');

for (var r = 0, n = importeddata.rows.length; r < n; r++) {
  for (var c = 0, m = importeddata.rows[r].cells.length; c < m && c < 6; c++) {
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
            }else if (c === 5) {
              birthday +=  table.rows[r].cells[5].innerHTML;
            }else if (c === 6){
              gender += table.rows[r].cells[6].innerHTML;
            }else if (c === 7){
              memberSince += table.rows[r].cells[7].innerHTML;
            }else if (c === 8){
              phone += table.rows[r].cells[8].innerHTML;
            }else if (c === 9){
              mobile += table.rows[r].cells[9].innerHTML;
            }else if (c === 10){
              street += table.rows[r].cells[10].innerHTML;
            }else if (c === 11){
              houseNumber += table.rows[r].cells[11].innerHTML;
            }else if (c === 12){
              zip += table.rows[r].cells[12].innerHTML;
            }else if (c === 13){
              city += table.rows[r].cells[13].innerHTML;
            }else if (c === 14){
              country += table.rows[r].cells[14].innerHTML;
            }else if (c === 15){
              notes += table.rows[r].cells[15].innerHTML;
            }else if (c === 16) {
              bankAccountNumber +=  table.rows[r].cells[16].innerHTML;
            }else if (c === 17){
              bankAccountOwner += table.rows[r].cells[17].innerHTML;
            }else if (c === 18){
              bankBicCode += table.rows[r].cells[18].innerHTML;
            }else if (c === 19){
              bankPlace += table.rows[r].cells[19].innerHTML;
            }else {
            };

            }

// document.getElementById("row2").innerHTML = firstname;


// Needs to be added to the ajax
// text6:birthday,
// text7:gender,
// text8:memberSince,
// text9:phone, text10:mobile, text11:street, text12:houseNumber; text13:zip, text14:city, text:15country, text16:notes, text17:bankAccountNumber,
// text18:bankAccountOwner, text19:bankBicCode, text20:bankPlace

      if(r >= 1 && firstname) {
      $.ajax({
      type: 'POST',
      url: '../php/process/import.php',
      data: { text1: firstname, text2: lastName, text3: clubMemberId, text4:email, text5:inactive, text11:street, text15:country},
      success: function(response) {
      $('#result').html(response);
      }
      });
      }

      firstname = "";
      lastName = "";
      clubMemberId = "";
      email = "";
      inactive = "";
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
      bankAccountNumber = "";
      bankAccountOwner = "";
      bankBicCode = "";
      bankPlace = "";

}
  });
  });
