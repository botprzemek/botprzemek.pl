// INTRO

// function intro() {
//   let src = ["text.webm", "lines.webm"];
//   let srcEl = new Array();
//   let intro = document.createElement("div");
//   let vidBox = document.createElement("div");
//   document.body.appendChild(intro);
//   intro.classList.add("intro");
//   for (let i = 0; i < src.length; i++) {
//     srcEl[i] = document.createElement("video");
//     Object.assign(srcEl[i], {
//       src: src[i],
//       autoplay: " ",
//       muted: " ",
//     });
//   }
//   intro.appendChild(vidBox);
//   vidBox.appendChild(srcEl[0]);
//   intro.appendChild(srcEl[1]);
//   setTimeout(() => {
//     document.body.removeChild(intro);
//   }, 2500);
// }

let wait = 0;

//LOADING ANIMATION

function loading() {
  let slide1 = document.getElementById("1");
  let slide2 = document.getElementById("2");
  let left = document.getElementById("left");
  let right = document.getElementById("right");
  let nav = document.getElementById("nav");
  let allSectionTitles = document.querySelectorAll(".section > h1");

  left.style.display = "none";
  right.style.display = "none";
  allSectionTitles.forEach((titles) => {
    titles.style.display = "none";
  });

  slide1.style.display = "none";
  slide2.style.display = "none";

  setTimeout(() => {
    left.style.display = "flex";
    right.style.display = "flex";
  }, 100);
  setTimeout(() => {
    allSectionTitles.forEach((titles) => {
      titles.style.display = "flex";
    });
  }, 1);
  setTimeout(() => {
    nav.style.transform = "translateY(0%)";
    slide1.style.display = "block";
    wait = 1;
  }, 500);
  setTimeout(() => {
    slide2.style.display = "block";
  }, 1);
}

// NAVBAR

function menu() {
  const indicator = document.querySelector(".indicator");
  const navBar = document.querySelector(".navbar");
  let allLi = document.querySelectorAll("li");
  let allSe = document.querySelectorAll(".section");
  let waitwheel = 0;
  let h = innerHeight;

  allLi.forEach((li, index) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      navBar.querySelector(".active").classList.remove("active");
      li.classList.add("active");

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

    let rect = section.getBoundingClientRect();
    console.log(rect.top);

    // section.addEventListener("mouseover", (e) => {
    //   e.preventDefault();
    //   once: true;

    //   indicator.style.transform = `translateX(calc(${index * 90}px))`;
    // });
    // console.log("${content.scrollTop}");
    // e.preventDefault();
    // once: true;
    // navBar.querySelector(".active").classList.remove("active");

    // document.getElementById("b" + indexed).classList.add("active");

    // const indicator = document.querySelector(".indicator");
    // indicator.style.transform = `translateX(calc(${index * 90}px))`;
    section.addEventListener("wheel", (e) => {
      once: true;
      if (waitwheel == 1) {
        e.preventDefault();
        setTimeout(() => {
          waitwheel = 0;
        }, 10);
      } else {
        if (e.deltaY < 0) {
          if (section.id == "s1") return;
          navBar.querySelector(".active").classList.remove("active");
          document.getElementById("b" + (indexed - 1)).classList.add("active");
          indicator.style.transform = `translateX(calc(${index * 90 - 90}px))`;
        } else if (e.deltaY > 0) {
          navBar.querySelector(".active").classList.remove("active");
          document.getElementById("b" + (indexed + 1)).classList.add("active");
          indicator.style.transform = `translateX(calc(${index * 90 + 90}px))`;
        }
        waitwheel++;
        setTimeout(() => {
          waitwheel--;
        }, 10);
      }
    });
  });

  document.body.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

// TITLE

let click_left = 0;

left.addEventListener("click", () => {
  if (click_left == 1) {
    left.classList.remove("clicked_left");
    right.parentNode.classList.remove("boxed_animation");
    click_left--;
  } else {
    left.classList.add("clicked_left");
    right.classList.remove("clicked_right");
    left.parentNode.classList.add("boxed_animation");
    click_left++;
  }
});

click_right = 0;

right.addEventListener("click", () => {
  if (click_right == 1) {
    right.classList.remove("clicked_right");
    right.parentNode.classList.remove("boxed_animation");
    click_right--;
  } else {
    right.classList.add("clicked_right");
    left.classList.remove("clicked_left");
    right.parentNode.classList.add("boxed_animation");
    click_right++;
  }
});

let linksList = [
  "css/sliders.css",
  "css/content3.css",
  "css/navbar2.css",
  "css/title7.css",
  "css/intro1.css",
  "https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css",
  "https://use.typekit.net/pvb1zov.css",
];

for (let i = 0; i < linksList.length; i++) {
  let link = document.createElement("link");
  document.head.appendChild(link);
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = linksList[i];
}

//window.onload = intro();
window.onload = loading();
setTimeout(() => {
  if (wait == 1) window.onload = menu();
}, 3501);
