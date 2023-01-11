<?php
    // Check if the form has been submitted
    if (isset($_POST["username"]) && isset($_POST["password"])) {
        // Get the submitted username and password
        $username = $_POST["username"];
        $password = $_POST["password"];

        // Check if the username and password match a known user
        if ($username == "admin" && $password == "password") {
            // If the login is successful, start a session and redirect to a protected page
            session_start();
            $_SESSION["logged_in"] = true;
            header("Location: protected.php");
            exit();
        } else {
            // If the login is not successful, display an error message
            echo "Incorrect username or password.";
        }
    }
?>