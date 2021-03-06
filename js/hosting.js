window.onpageshow = function () {
  if (
    String(window.performance.getEntriesByType("navigation")[0].type) ===
    "back_forward"
  ) {
    window.location.reload();
  }
};
let containers = new Array();
let columns = new Array();
let columnsText = new Array();
let rows = new Array();
let rowsText = new Array();
let textArray = new Array();
let tabSize = 4;
textArray[0] = ["Mini", "Medium", "Pro", "Expert"];
textArray[1] = ["4GB RAM", "8GB RAM", "16GB RAM", "24GB RAM"];
textArray[2] = ["Do 10 Graczy", "Do 20 Graczy", "Do 30 Graczy", "Do 40 Graczy"];
textArray[3] = ["Dysk 2GB", "Dysk 4GB", "Dysk 8GB", "Dysk +16GB"];
textArray[4] = [
  "Brak pluginów",
  "Do 10 Pluginów",
  "Do 15 Pluginów",
  "Do 30+ Pluginów",
];
textArray[5] = [
  "Wersja 1.8-1.19",
  "Wersja 1.8-1.19",
  "Wersja 1.8-1.19",
  "Wersja 1.8-1.19",
];
textArray[6] = [
  "Vanilla <br /> Minecraft",
  "Paper/Purpur <br /> Minecraft",
  "Paper/Purpur <br /> Minecraft",
  "Paper/Purpur/Forge <br /> Minecraft",
];
textArray[7] = ["/", "/", "/", "/"];
function createElements(elementSize) {
  let wait = 0;
  setTimeout(() => {
    wait = 1;
    hoverContainer();
  }, 700);
  function cancel(e) {
    if (wait == 0) e.preventDefault();
  }
  document.body.addEventListener("click", cancel);
  window.addEventListener("contextmenu", cancel);
  let body = document.createElement("div");
  let loadBackground = document.createElement("div");
  loadBackground.classList.add("loadBackground");
  let tableTitle = document.createElement("p");
  let table = document.createElement("div");
  tableTitle.textContent = "Hosting";
  body.classList.add("body");
  tableTitle.classList.add("title");
  table.classList.add("table");
  table.setAttribute(
    "style",
    `grid-template-columns: repeat(${elementSize}, 1fr)`
  );
  document.body.appendChild(body);
  body.appendChild(loadBackground);
  body.appendChild(tableTitle);
  body.appendChild(table);
  setTimeout(() => {
    loadBackground.style.transform = "translateY(-100%)";
  }, 1);
  for (let i = 0; i < elementSize; i++) {
    containers[i] = document.createElement("div");
    containers[i].classList.add("container");
    containers[i].setAttribute("link", textArray[7][i]);
    columns[i] = document.createElement("div");
    columns[i].classList.add("box", "column");
    columnsText[i] = document.createElement("h1");
    columnsText[i].textContent = textArray[0][i];
    columns[i].appendChild(columnsText[i]);
    containers[i].appendChild(columns[i]);
    for (let j = 0; j < 6; j++) {
      rows[j] = document.createElement("div");
      rows[j].classList.add("box", "row");
      rowsText[j] = document.createElement("p");
      if (textArray[j + 1] != undefined)
        rowsText[j].innerHTML = textArray[j + 1][i];
      else rowsText[j].textContent = "Brak danych";
      rows[j].appendChild(rowsText[j]);
      containers[i].appendChild(rows[j]);
    }
    table.appendChild(containers[i]);
  }
  function animateElements(amount, elements) {
    for (let i = 0; i < amount; i++) {
      elements[i].style.transform = "translateY(12%)";
      elements[i].style.opacity = "0";
      setTimeout(() => {
        elements[i].style.transform = "translateY(0%)";
        elements[i].style.opacity = "1";
      }, (i + 1.3) * 200 + 200);
    }
  }
  function animateElement(element, time) {
    element.style.transform = "translateY(12%)";
    element.style.opacity = "0";
    setTimeout(() => {
      element.style.transform = "translateY(0%)";
      element.style.opacity = "1";
    }, time);
  }
  function hoverContainer() {
    containers.forEach((container) => {
      container.addEventListener("mouseover", () => {
        container.style.transform = "translateY(-8%)";
        container.style.cursor = "pointer";
      });
      container.addEventListener("mouseout", (e) => {
        container.style.transform = "translateY(0%)";
        container.style.cursor = "auto";
      });
      container.addEventListener("click", (e) => {
        if (document.querySelector(".nextPage") != undefined)
          document.body.removeChild(document.querySelector(".nextPage"));
        let nextPage = document.createElement("div");
        let size = 100;
        nextPage.classList.add("nextPage");
        nextPage.style.width = size + "px";
        nextPage.style.height = size + "px";
        nextPage.style.transform = "scale(0.0001)";
        nextPage.style.left = e.clientX - size * 0.5 + "px";
        nextPage.style.top = e.clientY - size * 0.5 + "px";
        document.body.appendChild(nextPage);
        setTimeout(() => {
          nextPage.style.transform = "scale(45)";
        }, 1);
        setTimeout(() => {
          body.style.opacity = "0";
          nextPage.style.transform = "scale(0.0001)";
          setTimeout(() => {
            window.location.href = container.getAttribute("link");
            setTimeout(() => {
              body.style.opacity = "1";
            }, 1700);
          }, 1322);
        }, 1111);
      });
    });
  }
  animateElement(tableTitle, 130);
  animateElements(tabSize, containers);
}
window.onload = createElements(tabSize);
