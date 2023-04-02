<?php
$adres_bazy='localhost';
$uzytkownik='pizzeria';
$haslo='Pizza123#';
$nazwabazy='pizzeria';
$tablica='zamowienia';
$baza = new mysqli($adres_bazy, $uzytkownik, $haslo, $nazwabazy);