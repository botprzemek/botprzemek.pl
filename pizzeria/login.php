<?php
    if($_COOKIE["login"]==1){
        header("Location: /pizzeria/lista-zamowien.php");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/tekst.css">
    <title>Pizzeria | Logowanie</title>
</head>
<body>
    <h1>Pizzeria</h1>
    <p>Logowanie</p>
    <form action="weryfikacja.php" method="post">
        <div class="inputbox">
            <p>Login</p><input type="login" name="login"><br>
        </div>
        <div class="inputbox">
            <p>Hasło</p><input type="password" name="passwd"><br>
        </div>
        <input class="login" type="submit" value="Login">
    </form>
</body>
</html>