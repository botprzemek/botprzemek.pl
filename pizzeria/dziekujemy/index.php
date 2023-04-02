<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/tekst.css">
    <title>Pizzeria | Dziękujemy</title>
</head>
<body>

<?php 
    if(!isset($_COOKIE['udata'])){
        echo "<h1>Dziękujemy za zamówienie</h1>".'<span class="text">Zostaniesz przeniesiony automatycznie za '.'<p id="count">5</p>'." sekund</span>";
        echo '<script type="text/javascript" src="../js/counting.js"></script>';
    }
    else{
        header('Location: ../pizzeria');
    }
?>
    
</body>
</html>