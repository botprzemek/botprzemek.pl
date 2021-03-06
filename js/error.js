window.onpageshow = function () {
  if (
    String(window.performance.getEntriesByType("navigation")[0].type) ===
    "back_forward"
  ) {
    window.location.reload();
  }
};
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
counting.innerHTML = "zostaniesz przeniesiony za 3";
counting.style.display = "none";
document.body.appendChild(box);
box.appendChild(title);
box.appendChild(description);
box.appendChild(counting);
let loadBackground = document.createElement("div");
loadBackground.classList.add("loadBackground");
document.body.appendChild(loadBackground);
window.onload = function () {
  box.style.opacity = "1";
  setTimeout(() => {
    counting.style.display = "inline";
    let sec = 3;
    setInterval(function () {
      if (sec > 1) {
        counting.innerHTML = "zostaniesz przeniesiony za " + sec;
        sec--;
      } else if (sec == 1) {
        counting.innerHTML = "zostaniesz przeniesiony za 1";
        setTimeout(() => {
          loadBackground.style.transform = "translateY(0%)";
        }, 1010);
        setTimeout(() => {
          sec = 3;
          box.style.opacity = "0";
        }, 1381);
        setTimeout(() => {
          localStorage.setItem("visited", 1);
          loadBackground.style.transform = "translateY(-100%)";
        }, 2061);
        setTimeout(() => {
          window.location.href = "/";
        }, 3400);
      }
    }, 1000);
  }, 500);
};
