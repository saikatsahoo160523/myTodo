<?php
//create connection with mysql database

echo 'asdasda';

$conn = new mysqli("localhost", "raja", "raja", "rajadb");

//Cehck the connection, if there is a connection problem close

/* Check connection  */
if ($conn->connect_error) {

    die(header("HTTP/1.0 404 Not Found")); //Throw an error on failure
}else
{
    echo ("connected" );
}

$date = "101021";




//Insert data
$sql = "INSERT INTO myTable VALUES ('".$date."')";


$conn->query($sql);


/* Check connection  */
if ($conn->connect_error) {

    die(header("HTTP/1.0 404 Not Found")); //Throw an error on failure
}else
{
    die(header("HTTP/1.0 404 Not Found")); //Throw an error on failure
    echo ("connected" );
}


//Send data to the database
// echo $sql;
header("Location:form.html");
$conn->close();
?>