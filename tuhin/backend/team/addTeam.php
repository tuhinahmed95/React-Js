<?php
include 'cors.php';
$con = new mysqli('localhost', 'root', '', 'techvilo');

$title = $_POST['title'];
$department = $_POST['department'];



$target_dir = "../image/";
$target_file = $target_dir . basename($_FILES["photo"]["name"]);
if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    $photo = $_FILES["photo"]["name"];
} else {
    $photo='';
}

$query = "INSERT INTO `team`( `photo`, `title`, `department`) VALUES ('$photo','$title','$department')";
if ($title != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}