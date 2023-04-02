<?php

require_once 'polaczenie.php';

if(!isset($_COOKIE["data"])){
    header('Location: /pizzeria');
}

$imie=$_POST['imie'];
$nazwisko=$_POST['nazwisko'];
$adres=$_POST['adres'];
$zamowienie = $_COOKIE["data"];
var_dump($zamowienie);
$json = json_decode($zamowienie, true);
$x = count($json);
$suma = 0;
$data = date('Y/m/d H:i');
for($i=0;$i<$x;$i++){
    $jednostka = "";
    $j=$i+1;
    $typ="typ";
    foreach($json[$i] as $result => $typ){
        $jednostka .= $typ.' ';
    }
    $suma += $json[$i]["cena"];
    }
$zapytanie = $baza->query("INSERT INTO ".$nazwabazy.".".$tablica." (imie_klienta, nazwisko_klienta, adres, lista, kwota) VALUES ('".$imie."', '".$nazwisko."', '".$adres."', '".$zamowienie."', '".$suma."');");
if($zapytanie){
    setcookie("data", "", time() - 3600);
    header('Location: /pizzeria/dziekujemy');
}
$baza->close();