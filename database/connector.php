<?php
$servername = "localhost";
$username = "webgames_database";
$password = "password";
$dbname = "webgames_database";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}
?>
