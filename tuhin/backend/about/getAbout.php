<?php
include 'cors.php';
$con = new mysqli('localhost', 'root', '', 'techvilo');

$id=$_GET['id'];
$data=$con->query('select * from about where id='.$id)->fetch_assoc();
echo json_encode($data);