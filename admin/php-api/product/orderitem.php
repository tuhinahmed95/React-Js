<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
$con = new mysqli('localhost', 'root', '', 'foodpanda');

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$street = $_POST['street'];
$city = $_POST['city'];
$state = $_POST['state'];
$zipcode = $_POST['zipcode'];
$country = $_POST['country'];
$phone = $_POST['phone'];
$totalbill = $_POST['totalbill'];



// $target_dir = "images/";
// $target_file = $target_dir . basename($_FILES["photo"]["name"]);
// if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
//     $photo = $_FILES["photo"]["name"];
// } else {
//     $photo='';
// }

$query = "insert into orderlist(firstname,lastname,email,street,city,state,zipcode,country,phone,totalbill)values('$firstname','$lastname','$email','$street','$city','$state','$zipcode','$country','$phone','$totalbill')";
if ($firstname != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}
