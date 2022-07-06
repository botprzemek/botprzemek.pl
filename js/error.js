let box = document.createElement("div");
box.classList.add("box");
let title = document.createElement("h1");
title.textContent = "błąd 404";
title.classList.add("title");
let description = document.createElement("p");
description.textContent = "strona której szukasz, nie istnieje!";
description.classList.add("description");
let counting = document.createElement("span");
counting.classList.add("counting");
counting.innerHTML = "Zostaniesz przeniesiony za 3 sekundy.";
counting.style.display = "none";
document.body.appendChild(box);
box.appendChild(title);
box.appendChild(description);
box.appendChild(counting);
let loadBackground = document.createElement("div");
loadBackground.classList.add("loadBackground");
document.body.appendChild(loadBackground);
window.onload = function () {
  setTimeout(() => {
    counting.style.display = "inline";
    let sec = 3;
    setInterval(function () {
      if (sec > 1) {
        counting.innerHTML = "Zostaniesz przeniesiony za " + sec + " sekundy.";
        sec--;
      } else if (sec == 1) {
        counting.innerHTML = "Zostaniesz przeniesiony za 1 sekundę.";
        setTimeout(() => {
          loadBackground.style.transform = "translateY(0%)";
        }, 1010);
        setTimeout(() => {
          sec = 3;
          box.style.opacity = "0";
        }, 1381);
        setTimeout(() => {
          loadBackground.style.transform = "translateY(-100%)";
        }, 2061);
        setTimeout(() => {
          box.style.opacity = "1";
          window.location.href = "/";
        }, 3500);
      }
    }, 1000);
  }, 500);
};
