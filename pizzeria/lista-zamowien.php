<?php
    if($_COOKIE["login"]!=1){
        header("Location: /pizzeria");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/koszyk.css">
    <title>Pizzeria | Lista zamówień</title>
</head>
<body>

<h1>Ostatnie zamówienia</h1>

<?php

require_once 'polaczenie.php';

$zapytanie = $baza->query('SELECT * FROM '.$tablica.' ORDER BY id DESC LIMIT 1;');
$wynik = $zapytanie->fetch_array(MYSQLI_BOTH);
$zamowienie = $wynik["lista"];
$json = json_decode($zamowienie, true);
$x = count($json);
$suma = 0;
for($i=0;$i<$x;$i++){
    $jednostka = "";
    $j=$i+1;
    $typ="typ";
    foreach($json[$i] as $result => $typ){
        $jednostka .= '<p class="text">'.str_replace(".", ",", $typ).'</p>';
    }
    echo '<div class="pizza"><p class="numer" style="background: #333 !important;">Pizza nr '.$j.'</p>'.$jednostka.'</div>';
    $suma += $json[$i]["cena"];
}
echo '<div class="suma"><p>W sumie '.$x.' pizze</p></div>';
echo '<div class="kwota"><p>Za całkowitą kwotę '.str_replace(".", ",", $suma).' PLN</p></div>';
$baza->close();

?>

</body>
</html>