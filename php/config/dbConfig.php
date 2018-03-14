<?php
//DB details
$dbHost = 'sql5.pcextreme.nl';
$dbUsername = '80831upload';
$dbPassword = 'erhf83emcse';
$dbName = '80831upload';

//Create connection and select DB
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($db->connect_error) {
    die("Unable to connect database: " . $db->connect_error);
}
?>