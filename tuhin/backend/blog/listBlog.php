<?php
include 'cors.php';
$con = new mysqli('localhost', 'root', '', 'techvilo');
$data=$con->query('select * from blog')->fetch_all(MYSQLI_ASSOC);

echo json_encode($data);