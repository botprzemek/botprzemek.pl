const navBar = document.querySelector(".navbar");
const indicator = document.querySelector(".indicator");
let allLi = document.querySelectorAll("li");
let allSe = document.querySelectorAll(".section");
let first_id = "s1";
let last_id = ("s" + allSe.length).toString();
let waitWheel = 0;
let wait = 0;
let h = innerHeight;

// NAVBAR

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
  allSe.forEach((section, index) => {
    let indexed = index + 1;
    section.addEventListener("wheel", (e) => {
      once: true;
      if (waitWheel == 1) {
        e.preventDefault();
        setTimeout(() => {
          waitWheel = 0;
          return;
        }, 10);
      }
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
      waitWheel++;
      setTimeout(() => {
        waitWheel--;
      }, 10);
    });
  });
}

// BUTTONS

function categories() {
  let left = document.querySelectorAll(".left");
  let right = document.querySelectorAll(".right");

  left.forEach((lefty) => {
    let righty = lefty.parentNode.querySelector(".right");
    let click_left = 0;
    lefty.addEventListener("mouseover", () => {
      lefty.style.cursor = "pointer";
    });
    lefty.addEventListener("mouseout", () => {
      lefty.style.cursor = "auto";
    });
    lefty.addEventListener("click", () => {
      if (click_left == 1) {
        lefty.style = "width: 25% !important; z-index: 6 !important";
        lefty.parentNode.style = "height: 30% !important";
        click_left--;
      } else {
        lefty.style = "width: 50% !important; z-index: 10 !important";
        righty.style = "width: 25% !important; z-index: 6 !important";
        lefty.parentNode.style = "height: 100% !important";
        click_left++;
      }
    });
  });

  right.forEach((righty) => {
    let lefty = righty.parentNode.querySelector(".left");
    click_right = 0;
    righty.addEventListener("mouseover", () => {
      righty.style.cursor = "pointer";
    });
    righty.addEventListener("mouseout", () => {
      righty.style.cursor = "auto";
    });
    righty.addEventListener("click", () => {
      if (click_right == 1) {
        righty.style = "width: 25% !important; z-index: 6 !important";
        righty.parentNode.style = "height: 30% !important";
        click_right--;
      } else {
        righty.style = "width: 50% !important; z-index: 10 !important";
        lefty.style = "width: 25% !important; z-index: 6 !important";
        righty.parentNode.style = "height: 100% !important";
        click_right++;
      }
    });
  });
}

function waiting() {
  navBar.querySelector(".active").classList.remove("active");
  let lastSection = localStorage.getItem("lastSection");
  if (lastSection <= 0) {
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
  document.body.addEventListener("contextmenu", (e) => {
    e.preventDefault();
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
