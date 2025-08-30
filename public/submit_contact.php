<?php
// Smarterasp.net se mili database details yahan daalein
$servername = "your_server_name"; // Jaise 'localhost' agar local testing kar rahe hain, ya smarterasp.net ka server address
$username = "your_database_username"; // Smarterasp.net control panel se milega
$password = "your_database_password"; // Smarterasp.net control panel se milega
$dbname = "your_database_name"; // Smarterasp.net control panel se milega

// Database connection banayein
$conn = new mysqli($servername, $username, $password, $dbname);

// Connection check karein
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check karein ki form submit hua hai ya nahi (POST request hai ya nahi)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form se data receive karein
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject']; // Naya field
    $message = $_POST['message'];

    // SQL Injection se bachne ke liye prepared statements ka use karein (RECOMMENDED)
    $stmt = $conn->prepare("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $subject, $message); // "ssss" means four string parameters

    if ($stmt->execute()) {
        // Data successfully insert hone par
        // User ko thank you page par redirect karein
        header("Location: thank_you.html");
        exit();
    } else {
        // Agar koi error ho
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}   

// Database connection band karein
$conn->close();
?>