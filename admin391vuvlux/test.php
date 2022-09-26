<?php
$servername = "db6.cpanelhosting.rs:3306";
$username = "sdream_test";
$password = "vapeks456123";
$dbname = "sdream_websho";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id_employee, id_profile, id_lang, lastname, firstname, email, passwd FROM ps_employee";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id_employee"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. " " . $row["email"]. " " .  $row["passwd"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>	