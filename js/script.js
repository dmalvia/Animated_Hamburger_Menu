const btns = document.querySelectorAll("button");
const hamburger = document.querySelector(".hamburger");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "cross":
        hamburger.classList.toggle("cross");
        break;
      case "larrow":
        hamburger.classList.toggle("larrow");
        break;
      default:
        hamburger.classList.toggle("rarrow");
        break;
    }
  });
});
