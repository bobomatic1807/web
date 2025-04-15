<html>

<head>
    <title>Insert Page page</title>
</head>

<body>
    <center>

<?php
//Make database connection
$servername = "sql5.freesqldatabase.com";
$username = "sql5773442";
$password = "kxevyGxvws";
$dbname = "sql5773442";
 
// Create a connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check the connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}else{
	echo "connected successfully";
}

if(isset($_POST['submit'])){
	
	$sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";
 
	if (mysqli_query($conn, $sql)) {
	  echo "New contact added successfully";
	} else {
	  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}
 
	mysqli_close($conn);	
	
}

?>	
</center>
</body>

</html>