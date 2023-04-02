<?php
    if($_POST["login"]=="admin" && $_POST["passwd"]=="admin"){
        setcookie("login", 1, time() + 3600);
        header("Location: /pizzeria/lista-zamowien.php");
    }
?>