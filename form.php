
<?php
//create connection with mysql database
$conn = new mysqli("localhost", "raja", "raja", "rajadb");

//Cehck the connection, if there is a connection problem close


$name = $_POST["name"];
$email = $_POST["email"];
$address = $_POST["address"];

echo 'asdasda';

//Cehck the connection, if there is a connection problem close

/* Check connection  */
if ($conn->connect_error) {

    die("Connection to database failed: " . $conn->connect_error);
}else
{
    echo ("connected" );
}

//Insert data
$sql = "INSERT INTO form1 VALUES ('".$name."','".$email."','".$address."')";


$conn->query($sql);

//Send data to the database
// echo $sql;
header("Location:form.html");
$conn->close();
?>
