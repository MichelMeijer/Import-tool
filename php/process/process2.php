<?php

require('../config/dbConfig.php');

$text1 = $_POST['text1'];
$text2 = $_POST['text2'];
$text3 = $_POST['text3'];
$text4 = $_POST['text4'];
$text5 = $_POST['text5'];



echo $text1 . $text2 . $text3 . $text4;

$sql = "UPDATE members SET
BANK_ACCOUNT_NUMBER = '$text1', BANK_ACCOUNT_OWNER = '$text2', BANK_BIC_CODE = '$text3', BANK_PLACE = '$text4'
WHERE club_member_id = $text5";


if ($db->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$db->close();



?>
