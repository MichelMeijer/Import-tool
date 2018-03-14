<?php

require('../config/dbConfig.php');

$text1 = $_POST['text1'];
$text2 = $_POST['text2'];
$text3 = $_POST['text3'];
$text4 = $_POST['text4'];
$text5 = $_POST['text5'];

echo $text1 . $text2 . $text3 . $text4 . $text5;



 $sql = "INSERT INTO members (firstname, lastname, club_member_id, email, 	inactive)
VALUES ('".$text1."', '".$text2."', '".$text3."', '".$text4."', '".$text5."')";


if ($db->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$db->close();



?>
