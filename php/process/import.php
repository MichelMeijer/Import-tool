
<?php
define('API_URL', 'https://virtuagym.com/api/v1/');
define('API_KEY', 'lUyqe1zLMwOJtfV1PMizC1Aak6KiofKGdQ8OQfqSEb');
define('CLUB_ID', '22423');
define('CLUB_KEY', 'CS-22423-ACCESS-6jawWke3YuEImUbiVzPgs0UzC'); // business-settings -> general -> advanced -> club key

$fname = $_POST['text1'];
$lname = $_POST['text2'];
$club_member_id=$_POST['text3'];
$email = $_POST['text4'];
$active = $_POST['text5'];
$birthday = $_POST['text6'];
$gender = $_POST['text7'];
$member_since= $_POST['text8'];
$phone= $_POST['text9'];
$mobile= $_POST['text10'];
$street= $_POST['text11'];
$street_extra= $_POST['text12'];
$zip= $_POST['text13'];
$place= $_POST['text14'];
$country= $_POST['text15'];
$ba_number= $_POST['text17'];
$ba_owner= $_POST['text18'];
$ba_bic_code= $_POST['text19'];



$customer_data = array(
    "firstname" => $fname,
    "lastname" => $lname,
    "external_id" => $club_member_id,
    "email" => $email,
    "active" => $active,
    "street" => $street,
    // "birthday"=> $birthday,
    // "gender" => $gender,
    // "phone" => $phone,
    // "mobile" => $mobile,
    // "street_extra" => $street_extra,
    // "zip" => $zip,
    // "place" => $place,
    "country" => $country,
    "ba_number" => $ba_number,
    "ba_owner" => $ba_owner,
    "ba_bic_code" => $ba_bic_code
);
$data_string = json_encode($customer_data);

$url = API_URL.'club/'.CLUB_ID.'/member?api_key='.API_KEY.'&club_secret='.CLUB_KEY;
$ch = curl_init($url);
curl_setopt_array($ch, array(
        CURLOPT_CUSTOMREQUEST => 'PUT',
        CURLOPT_POSTFIELDS => $data_string,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_SSL_VERIFYPEER => false // not the best way, but it works (might want to validate the certificate)
    )
);
$result = curl_exec($ch);
curl_close($ch);

$response = json_decode($result);

echo 'Response: <br /><br />';
echo '<pre>';
var_dump($response);
echo '</pre>';
?>
