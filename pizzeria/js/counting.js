function animacja() {
  let sec = 5;
  setInterval(function () {
    if (sec > 0) {
      document.getElementById("count").innerHTML = sec;
      sec--;
    } else {
      sec = 5;
      window.location.href = "../";
    }
  }, 1000);
}

window.onload = animacja();
