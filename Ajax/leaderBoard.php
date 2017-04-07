<?php
    require("../../database/connector.php");
    $sql = "SELECT * FROM leaderboard ORDER BY score DESC LIMIT 10";
    $result = $conn->query($sql);
    $leaders = [];
    while ($row = $result->fetch_assoc()) {
        $leaders[] = $row;
    }
    echo json_encode($leaders);
?>
