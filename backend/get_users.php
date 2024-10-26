<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quizmis";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT userID, username, email, user_type FROM user";
$result = $conn->query($sql);

$users = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;  // Add each user to the array
    }
}

header('Content-Type: application/json');
echo json_encode($users);

$conn->close();
