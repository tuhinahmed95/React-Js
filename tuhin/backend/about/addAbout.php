<?php
include 'cors.php';
$con = new mysqli('localhost', 'root', '', 'techvilo');

$title = $_POST['title'];
$content = $_POST['content'];
$btn = $_POST['btn'];


$target_dir = "../image/";
$target_file = $target_dir . basename($_FILES["photo"]["name"]);
if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    $photo = $_FILES["photo"]["name"];
} else {
    $photo='';
}

$query = "INSERT INTO `about`(`photo`, `title`, `content`, `btn`) VALUES ('$photo','$title','$content','$btn')";
if ($title != '') {
    $con->query($query);
    echo json_encode(['status'=>true]);
}else{
    echo json_encode(['status'=>false]);
}