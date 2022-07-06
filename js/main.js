window.onpageshow = function () {
  if (
    String(window.performance.getEntriesByType("navigation")[0].type) ===
    "back_forward"
  ) {
    window.location.reload();
  }
};
const navBar = document.querySelector(".navbar");
const indicator = document.querySelector(".indicator");
let allLi = document.querySelectorAll("li");
let wait = 0;
let h = innerHeight;
let sectionOf = new Array();
let boxedSections = new Array();
let boxedBox = new Array();
let boxedText = new Array();
let backgroundSections = new Array();
let backgroundTexts = new Array();
let amount = 2;
let lang = new Array();
let categoryText = new Array();
let categoryLinks = new Array();
lang["en"] = ["welcome", "my projects"];
lang["pl"] = ["witaj", "moje projekty", "wgerrweg wreg"];
categoryText[0] = ["bpPanel", "hosting"];
categoryLinks[0] = ["../", "hosting.html"];
categoryText[1] = ["test1", "test2"];
categoryLinks[1] = ["../", "../"];

// SECTIONS

function sections() {
  for (let i = 0; i < amount; i++) {
    sectionOf[i] = document.createElement("div");
    sectionOf[i].classList.add("section");
    sectionOf[i].id = "s" + (i + 1);
    boxedSections[i] = document.createElement("div");
    boxedSections[i].classList.add("boxed");
    backgroundSections[i] = document.createElement("div");
    backgroundSections[i].classList.add("background");
    backgroundTexts[i] = document.createElement("h1");
    backgroundTexts[i].classList.add("text", "front");
    backgroundTexts[i].style.display = "none";
    setTimeout(() => {
      backgroundTexts[i].style.display = "inline";
    }, 250);
    if (window.navigator.language == "pl" && lang["pl"][i] != undefined) {
      backgroundTexts[i].textContent = lang["pl"][i];
      if (lang["pl"][i] == undefined) backgroundTexts[i].textContent = "null";
    }
    if (window.navigator.language != "pl" && lang["en"][i] != undefined) {
      backgroundTexts[i].textContent = lang["en"][i];
      if (lang["en"][i] == undefined) backgroundTexts[i].textContent = "null";
    }
    backgroundSections[i].appendChild(backgroundTexts[i]);
    sectionOf[i].appendChild(boxedSections[i]);
    sectionOf[i].appendChild(backgroundSections[i]);
    for (let j = 0; j < 2; j++) {
      boxedBox[j] = document.createElement("div");
      boxedBox[j].classList.add("test");
      boxedBox[j].setAttribute("link", categoryLinks[i][j]);
      setTimeout(() => {
        boxedBox[j].style.display = "flex";
      }, 250);
      if (j == 0) boxedBox[j].classList.add("left");
      else if (j == 1) boxedBox[j].classList.add("right");
      boxedText[j] = document.createElement("h1");
      if (categoryText[i] != undefined)
        boxedText[j].textContent = categoryText[i][j];
      else boxedText[j].textContent = "null";
      boxedSections[i].appendChild(boxedBox[j]);
      boxedBox[j].appendChild(boxedText[j]);
    }
    document.getElementById("content").appendChild(sectionOf[i]);
  }
}

sections();
let first_id = "s1";
let last_id = ("s" + sectionOf.length).toString();

function waiting() {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 10);
  navBar.querySelector(".active").classList.remove("active");
  let lastSection = localStorage.getItem("lastSection");
  if (lastSection <= 0 || lastSection === undefined) {
    allLi[0].classList.add("active");
    indicator.style.transform = `translateX(0px)`;
  } else {
    allLi[lastSection - 1].classList.add("active");
    indicator.style.transform = `translateX(${(lastSection - 1) * 90}px)`;
  }

  if (wait == 0) {
    document.body.addEventListener("click", (e) => {
      e.preventDefault();
    });
    document.body.addEventListener("mouseover", (e) => {
      e.preventDefault();
    });
  }
  sectionOf.forEach((section) => {
    section.addEventListener("wheel", (e) => {
      if (wait == 0) e.preventDefault();
    });
  });
  document.body.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  document.body.addEventListener("keydown", (e) => {
    if (e.key == "Backspace") e.preventDefault();
  });
}

function operation(operation) {
  localStorage.setItem("lastSection", operation);
  document.getElementById("b" + operation).classList.add("active");
  indicator.style.transform = `translateX(calc(${(operation - 1) * 90}px))`;
}

function menu() {
  allLi.forEach((li, index) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      navBar.querySelector(".active").classList.remove("active");
      li.classList.add("active");

      localStorage.setItem("lastSection", index + 1);
      indicator.style.transform = `translateX(calc(${index * 90}px))`;

      setTimeout(() => {
        content.focus();
        content.scrollTo({
          top: index * h,
          left: 0,
          behavior: "smooth",
        });
      }, 10);
    });
  });
  sectionOf.forEach((section, index) => {
    let indexed = index + 1;
    let waitWheel = 0;
    section.addEventListener(
      "wheel",
      (e) => {
        once: true;
        if (waitWheel == 1) {
          e.preventDefault();
          setTimeout(() => {
            waitWheel = 0;
            return;
          }, 20);
        } else {
          if (
            (e.deltaY < 0 && section.id == first_id) ||
            (e.deltaY > 0 && section.id == last_id)
          ) {
            return;
          }
          navBar.querySelector(".active").classList.remove("active");
          if (e.deltaY < 0) {
            operation(indexed - 1);
          } else if (e.deltaY > 0) {
            operation(indexed + 1);
          }
          waitWheel = 1;
          setTimeout(() => {
            waitWheel = 0;
          }, 20);
        }
      },
      { passive: true }
    );
  });
}

function categories() {
  let category = document.querySelectorAll(".test");
  category.forEach((one) => {
    if (one.previousElementSibling == null) two = one.nextElementSibling;
    else two = one.previousElementSibling;
    let click = 0;
    one.addEventListener("mouseover", () => {
      one.style.cursor = "pointer";
    });
    one.addEventListener("mouseout", () => {
      one.style.cursor = "auto";
    });
    one.addEventListener("click", () => {
      if (click == 1) {
        one.style = "width: 25% !important; z-index: 6 !important";
        one.parentNode.style = "height: 30% !important";
        click--;
      } else {
        one.style = "width: 50% !important; z-index: 10 !important";
        two.style = "width: 25% !important; z-index: 6 !important";
        one.parentNode.style = "height: 100% !important";
        one.style.cursor = "auto";
        setTimeout(() => {
          window.location.href = one.getAttribute("link");
          one.style = "width: 25% !important; z-index: 6 !important";
          one.parentNode.style = "height: 30% !important";
        }, 1100);
        click++;
      }
      sectionOf.forEach((section) => {
        section.addEventListener("wheel", (e) => {
          if (click == 1) e.preventDefault();
        });
      });
    });
  });
}

waiting();
setTimeout(() => {
  navBar.style.transform = "translateY(0%)";
  indicator.style.transition =
    "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
  wait = 1;
  menu();
  categories();
}, 1000);
