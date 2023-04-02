function intro() {
  let src = ["text.webm", "lines.webm"];
  let srcEl = new Array();
  let intro = document.createElement("div");
  let vidBox = document.createElement("div");
  document.body.appendChild(intro);
  intro.classList.add("intro");
  for (let i = 0; i < src.length; i++) {
    srcEl[i] = document.createElement("video");
    Object.assign(srcEl[i], {
      src: src[i],
      autoplay: " ",
      muted: " ",
    });
  }
  intro.appendChild(vidBox);
  vidBox.appendChild(srcEl[0]);
  intro.appendChild(srcEl[1]);
  setTimeout(() => {
    document.body.removeChild(intro);
  }, 2550);
}

window.onload = intro();
