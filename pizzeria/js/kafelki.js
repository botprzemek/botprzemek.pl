let wlasciwosci_pizza = [
  (pizze = [
    "Margherita|35,99",
    "Capricciosa|39,99",
    "Funghi|39,99",
    "Jalapeño|45,99",
    "Pepperoni|45,99",
  ]),
  (sosy = [
    "Pomidorowy|0",
    "Czosnkowy|1,99",
    "Tysiąca wysp|2,99",
    "Ostry Chilli|2,99",
  ]),
  (ciasta = ["Grube|4,99", "Cienkie|0"]),
];

class Pizza {
  constructor(typ, sos, ciasto, cena) {
    this.typ = typ;
    this.sos = sos;
    this.ciasto = ciasto;
    this.cena = cena;
  }
}

let ilosc_pizz = 0;
let nowa = new Array();
let tekst_tytul = ["Wybierz pizzę", "Wybierz sos", "Wybierz ciasto"];
let tytul = new Array();
let dodaj = document.createElement("div");
let tlo_dodaj = document.createElement("div");
let login = document.createElement("p");
tlo_dodaj.classList.add("background");
let suma = 0;

function kafelki() {
  let select = document.createElement("div");
  document.body.appendChild(select);
  document.body.appendChild(login);
  login.classList.add("login");
  login.innerHTML = "Zaloguj się";
  select.classList = "select";

  for (let i = 0; i < wlasciwosci_pizza.length; i++) {
    let box = document.createElement("div");
    tytul[i] = document.createElement("p");
    tytul[i].innerHTML = tekst_tytul[i];
    select.appendChild(tytul[i]);
    select.appendChild(box);
    box.classList = "container";
    box.style.transition = "500ms ease all";
    box.style.opacity = "0";
    box.style.transform = "translateY(15%)";
    tytul[i].style.transition = "500ms ease all";
    tytul[i].style.opacity = "0";
    tytul[i].style.transform = "translateY(15%)";
    setTimeout(() => {
      box.style.transform = "translateY(0%)";
      box.style.opacity = "100";
      tytul[i].style.transform = "translateY(0%)";
      tytul[i].style.opacity = "100";
    }, 250 + i * 500);
  }

  let tekst_suma = document.createElement("p");
  let dodaj_tekst = document.createElement("p");
  let tekst_zapas;
  select.appendChild(tekst_suma);
  select.appendChild(dodaj);
  dodaj.appendChild(dodaj_tekst);
  dodaj.appendChild(tlo_dodaj);
  tekst_suma.innerHTML = "Zaznacz wszystkie pola";
  dodaj.classList.add("dodaj");
  dodaj_tekst.innerHTML = "Dodaj do koszyka";

  dodaj.style.transition = "500ms ease all";
  dodaj.style.opacity = "0";
  dodaj.style.transform = "translateY(15%)";
  tekst_suma.style.transition = "500ms ease all";
  tekst_suma.style.opacity = "0";
  tekst_suma.style.transform = "translateY(15%)";
  setTimeout(() => {
    dodaj.style.transform = "translateY(0%)";
    dodaj.style.opacity = "100";
    tekst_suma.style.transform = "translateY(0%)";
    tekst_suma.style.opacity = "100";
  }, 1750);

  let ilosc_kategorii = select.querySelectorAll(".container").length;
  let ilosc_kafelek = new Array();
  let pudelko = new Array();
  let tekst = new Array();
  let nazwa = new Array();
  let cena = new Array();
  let tlo = new Array();
  let ikonka = new Array();

  for (let i = 0; i < ilosc_kategorii; i++) {
    ilosc_kafelek[i] = wlasciwosci_pizza[i].length;
    select.querySelectorAll(".container")[i].style.gridTemplateColumns =
      "repeat(" + ilosc_kafelek[i] + ", 1fr)";

    for (let j = 0; j < ilosc_kafelek[i]; j++) {
      pudelko[i] = document.createElement("div");
      tekst[i] = document.createElement("span");
      nazwa[i] = document.createElement("p");
      cena[i] = document.createElement("p");
      tlo[i] = document.createElement("div");
      ikonka[i] = document.createElement("div");
      pudelko[i].className = "box" + (i + 1);
      tlo[i].className = "background";
      ikonka[i].className = "icon";
      nazwa[i].innerHTML = wlasciwosci_pizza[i][j].split("|")[0];
      if (wlasciwosci_pizza[i][j].split("|")[1] == 0) {
        cena[i].innerHTML = "Gratis";
      } else {
        cena[i].innerHTML = wlasciwosci_pizza[i][j].split("|")[1] + " PLN";
      }
      select.querySelectorAll(".container")[i].appendChild(pudelko[i]);
      pudelko[i].appendChild(tekst[i]);
      pudelko[i].appendChild(tlo[i]);
      pudelko[i].appendChild(ikonka[i]);
      tekst[i].appendChild(nazwa[i]);
      tekst[i].appendChild(cena[i]);
      pudelko[i].setAttribute("rodzaj", wlasciwosci_pizza[i][j].split("|")[0]);
      pudelko[i].setAttribute("cena", wlasciwosci_pizza[i][j].split("|")[1]);
    }

    document.querySelectorAll(".box" + (i + 1)).forEach((div) => {
      div.addEventListener("mouseover", () => {
        div.classList.add("hover");
      });
      div.addEventListener("mouseout", () => {
        div.classList.remove("hover");
      });
      div.addEventListener("click", () => {
        if (
          div.classList == "box" + (i + 1) + " active" ||
          div.classList == "box" + (i + 1) + " hover active" ||
          div.classList == "box" + (i + 1) + " active hover"
        ) {
          div.classList.remove("active");
        } else if (
          div.classList == "box" + (i + 1) ||
          div.classList == "box" + (i + 1) + " hover"
        ) {
          document.body.querySelectorAll(".box" + (i + 1)).forEach((active) => {
            active.classList.remove("active");
          });
          div.querySelector("p").innerHTML = div.getAttribute("rodzaj");
          div.classList.add("active");
        }
        if (document.body.querySelectorAll(".active").length == 3) {
          tekst_zapas = "";
          suma = 0;
          document.body.querySelectorAll(".active").forEach((wartosc) => {
            tekst_zapas += wartosc.getAttribute("rodzaj") + ", ";
            tekst_suma.innerHTML = tekst_zapas;
            suma += parseFloat(wartosc.getAttribute("cena").replace(",", "."));
          });
          suma = suma.toFixed(2);
          tekst_suma.innerHTML +=
            "Suma:  " + suma.toString().replace(".", ",") + " PLN";
        } else {
          tekst_suma.innerHTML = tekst_zapas = "Zaznacz wszystkie pola";
        }
      });
    });
  }
}

let koszyk = document.createElement("div");
let tlo_koszyk = document.createElement("div");
let tekst_koszyk = document.createElement("p");
document.body.appendChild(koszyk);
koszyk.appendChild(tekst_koszyk);
koszyk.appendChild(tlo_koszyk);
koszyk.classList.add("koszyk");
tekst_koszyk.innerHTML = "0";

function dodajDoKoszyka() {
  nowa[ilosc_pizz] = new Pizza(
    document.body.querySelectorAll(".active")[0].getAttribute("rodzaj"),
    document.body.querySelectorAll(".active")[1].getAttribute("rodzaj"),
    document.body.querySelectorAll(".active")[2].getAttribute("rodzaj"),
    suma
  );
  console.log(nowa[ilosc_pizz]);
  ilosc_pizz++;
  tekst_koszyk.innerHTML = ilosc_pizz;
}

function doKoszyka() {
  if (ilosc_pizz > 0) {
    let json = JSON.stringify(nowa);
    document.cookie = "data=" + json;

    document.body.style.transition = "500ms ease all";
    document.body.style.opacity = "0";
    document.body.style.overflow = "hidden";
    document.body.style.transform = "translateY(15%)";

    setTimeout(() => {
      document.body.style.opacity = "100";
      document.body.style.transform = "translateY(0%)";
      window.location.href = "koszyk.php";
    }, 500);
  }
}

function doLoginu() {
  let json = JSON.stringify(nowa);
  document.cookie = "data=" + json;

  document.body.style.transition = "500ms ease all";
  document.body.style.opacity = "0";
  document.body.style.overflow = "hidden";
  document.body.style.transform = "translateY(15%)";

  setTimeout(() => {
    document.body.style.opacity = "100";
    document.body.style.transform = "translateY(0%)";
    window.location.href = "login.php";
  }, 500);
}

dodaj.addEventListener("click", dodajDoKoszyka);

koszyk.addEventListener("click", doKoszyka);

login.addEventListener("click", doLoginu);

window.onload = kafelki();

koszyk.style.transition = "500ms ease all";
koszyk.style.opacity = "0";
koszyk.style.transform = "translateY(15%)";
login.style.transition = "500ms ease all";
login.style.opacity = "0";
login.style.transform = "translateY(15%)";
setTimeout(() => {
  koszyk.style.transform = "translateY(0%)";
  koszyk.style.opacity = "100";
  login.style.transform = "translateY(0%)";
  login.style.opacity = "100";
}, 2250);
