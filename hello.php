<?php
$name = $_POST['name'];
$email = $_POST['email'];
$parfume = $_POST['parfume'];
$quantity = $_POST['quantity'];
$message = $_POST['message'];


$conn = new mysqli('localhost' , 'root' , '' , 'newdb');
if($conn->connection_error){
    die('Connection Failed :' $conn->connection_error);

}else{
    $stmt = $conn->prepare("insert into registration (name,email,parfume,quantity,message)
    values(?,?,?,?,?)");
    $stmt->bind_param("sssss",$name, $email, $parfume , $quantity , $message   );
    $stmt->execute();
    echo "U regjistrua me sukses";
    $stmt->close();
    $conn->close();
}

?>