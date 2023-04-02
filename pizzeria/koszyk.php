<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/koszyk.css" />
    <title>Pizzeria | Koszyk</title>
</head>
<body>

<h1>Twój koszyk</h1>

<?php
if(isset($_COOKIE["data"])){
    $json = json_decode($_COOKIE["data"], true);
    $x = count($json);
    $suma = 0;
    for($i=0;$i<$x;$i++){
        $jednostka = "";
        $j=$i+1;
        $typ="typ";
        foreach($json[$i] as $result => $typ){
            $jednostka .= '<div class="text"><p>'.str_replace(".", ",", $typ).'</p></div>';
        }
        echo '<div class="pizza"><div class="numer"><div><p>Pizza nr '.$j.'</p></div><div class="background"></div></div>'.$jednostka.'</div>';
        $suma += $json[$i]["cena"];
    }
    if($x==1){
        echo '<div class="suma"><p>W sumie '.$x.' pizza</p></div>';
    }
    else if($x%5==0){
        echo '<div class="suma"><p>W sumie '.$x.' pizz</p></div>';
    }
    else{
        echo '<div class="suma"><p>W sumie '.$x.' pizze</p></div>';
    }
    echo '<div class="kwota"><p>Za całkowitą kwotę '.str_replace(".", ",", $suma).' PLN</p></div>';  
}
else{
    header('Location: /pizzeria');
}
?>   

    <form action="zapytanie.php" method="POST">
        <input type="text" name="imie" placeholder="Twoje imię" required>
        <input type="text" name="nazwisko" placeholder="Twoje nazwisko" required>
        <input type="text" name="adres" placeholder="Twój adres" required>
        <button value="Zamów">Zamów</button>
    </form>

    <script type="text/javascript" src="js/koszyk.js"></script>

</body>
</html>