<?php

require('../config/dbConfig.php');

$text1 = $_POST['text1'];
$text2 = $_POST['text2'];
$text3 = $_POST['text3'];
$text4 = $_POST['text4'];
$text5 = $_POST['text5'];
$text6 = $_POST['text6'];
$text7 = $_POST['text7'];
$text8 = $_POST['text8'];
$text9 = $_POST['text9'];
$text10 = $_POST['text10'];
$text11 = $_POST['text11'];
$text12 = $_POST['text12'];

echo $text1 . $text2 . $text3 . $text4 . $text5 . $text6 . $text7 . $text8 . $text9 . $text10 . $text11;



 $sql = "UPDATE members SET
 BIRTHDAY = '$text1', GENDER = '$text2', MEMBER_SINCE = '$text3', PHONE = '$text4', MOBILE = '$text5', STREET = '$text6', HOUSE_NUMBER = '$text7', ZIP = '$text8', CITY = '$text9', COUNTRY = '$text10', NOTES = '$text11'
WHERE club_member_id = $text12";


if ($db->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$db->close();



?>
