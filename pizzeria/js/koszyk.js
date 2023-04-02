function zamowienie() {
  let zamow = document.querySelectorAll("button");
  zamow.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.classList.add("hover");
    });
    box.addEventListener("mouseout", () => {
      box.classList.remove("hover");
    });
  });
}

window.onload = zamowienie();
