<?php
include 'cors.php';
$con = new mysqli('localhost', 'root', '', 'techvilo');

$id=$_GET['id'];

$data=$con->query('delete from blog where id='.$id);

echo json_encode(['status'=>true]);