const navBar = document.querySelector(".navbar");
let h = content.innerHeight;
allLi = document.querySelectorAll("li");
content = document.getElementById("content");

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");

const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
const s4 = document.getElementById("s4");
const s5 = document.getElementById("s5");

allLi.forEach((li, index) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    navBar.querySelector(".active").classList.remove("active");
    li.classList.add("active");

    const indicator = document.querySelector(".indicator");
    indicator.style.transform = `translateX(calc(${index * 90}px))`;
    console.log(index);
  });
});

b1.addEventListener("click", () => {
  setTimeout(() => {
    content.focus();
    content.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, 200);
});
b2.addEventListener("click", () => {
  setTimeout(() => {
    content.focus();
    content.scrollTo({
      top: h,
      left: 0,
      behavior: "smooth",
    });
  }, 200);
});
b3.addEventListener("click", () => {
  setTimeout(() => {
    content.focus();
    content.scrollTo({
      top: 2 * h,
      left: 0,
      behavior: "smooth",
    });
  }, 200);
});
b4.addEventListener("click", () => {
  setTimeout(() => {
    content.focus();
    content.scrollTo({
      top: 3 * h,
      left: 0,
      behavior: "smooth",
    });
  }, 200);
});
b5.addEventListener("click", () => {
  setTimeout(() => {
    content.focus();
    content.scrollTo({
      top: 4 * h,
      left: 0,
      behavior: "smooth",
    });
  }, 200);
});

s1.addEventListener("mouseover", () => {
  once: true;
  navBar.querySelector(".active").classList.remove("active");
  b1.classList.add("active");

  const indicator = document.querySelector(".indicator");
  indicator.style.transform = `translateX(0)`;
});
s2.addEventListener("mouseover", () => {
  once: true;
  navBar.querySelector(".active").classList.remove("active");
  b2.classList.add("active");

  const indicator = document.querySelector(".indicator");
  indicator.style.transform = `translateX(90px)`;
});
s3.addEventListener("mouseover", () => {
  once: true;
  navBar.querySelector(".active").classList.remove("active");
  b3.classList.add("active");

  const indicator = document.querySelector(".indicator");
  indicator.style.transform = `translateX(calc(2 * 90px))`;
});
s4.addEventListener("mouseover", () => {
  once: true;
  navBar.querySelector(".active").classList.remove("active");
  b4.classList.add("active");

  const indicator = document.querySelector(".indicator");
  indicator.style.transform = `translateX(calc(3 * 90px))`;
});
s5.addEventListener("mouseover", () => {
  once: true;
  navBar.querySelector(".active").classList.remove("active");
  b5.classList.add("active");
  const indicator = document.querySelector(".indicator");
  indicator.style.transform = `translateX(calc(4 * 90px))`;
});

s1.addEventListener("mousewheel", () => {
  once: true;
  navBar.querySelector(".active").classList.remove("active");
  b1.classList.add("active");

  const indicator = document.querySelector(".indicator");
  indicator.style.transform = `translateX(0)`;
});
s2.addEventListener("mousewheel", () => {
  once: true;
  navBar.querySelector(".active").classList.remove("active");
  b2.classList.add("active");

  const indicator = document.querySelector(".indicator");
  indicator.style.transform = `translateX(90px)`;
});
s3.addEventListener("mousewheel", () => {
  once: true;
  navBar.querySelector(".active").classList.remove("active");
  b3.classList.add("active");

  const indicator = document.querySelector(".indicator");
  indicator.style.transform = `translateX(calc(2 * 90px))`;
});
s4.addEventListener("mousewheel", () => {
  once: true;
  navBar.querySelector(".active").classList.remove("active");
  b4.classList.add("active");

  const indicator = document.querySelector(".indicator");
  indicator.style.transform = `translateX(calc(3 * 90px))`;
});
s5.addEventListener("mousewheel", () => {
  once: true;
  navBar.querySelector(".active").classList.remove("active");
  b5.classList.add("active");
  const indicator = document.querySelector(".indicator");
  indicator.style.transform = `translateX(calc(4 * 90px))`;
});

document.body.addEventListener("contextmenu", (e) => {
  //e.preventDefault();
});
