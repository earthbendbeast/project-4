<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project4";

try{
    $conn = new mysqli($servername,$username,$password,$dbname);
}catch(Exception $e){
    $error = "fatal error" . $e->getMessage();
    die($error);
}