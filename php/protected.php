<?php
    // Start the session
    session_start();
    // Check if the user is logged in
    if (!isset($_SESSION["logged_in"]) || $_SESSION["logged_in"] !== true) {
        // If the user is not logged in, redirect to the login page
        header("Location: login.html");
        exit();
    }
?>
<!DOCTYPE html>
<html>
<head>
    <title>Protected</title>
</head>
<body>
    <h1>Welcome!</h1>
    <p>You are now logged in.</p>
    <a href="logout.php">Logout</a>
</body>
</html>