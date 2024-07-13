<?php
include 'cors.php';
$con = new mysqli('localhost', 'root', '', 'techvilo');
$data=$con->query('select * from team')->fetch_all(MYSQLI_ASSOC);

echo json_encode($data);