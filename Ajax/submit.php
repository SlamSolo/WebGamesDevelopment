
<?php
    require("../../database/connector.php");
    $username = $_POST['username'];
    $score = $_POST['score'];
    $sql = "INSERT INTO leaderboard VALUES(NULL, '{$username}', {$score})";
    if ($conn->query($sql) === TRUE) {
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>
