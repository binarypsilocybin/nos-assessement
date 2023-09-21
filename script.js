const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const iconClose = document.querySelector(".open-icon");
const iconOpen = document.querySelector(".close-icon");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  iconOpen.classList.toggle("active");
  iconClose.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const validatePhone = () => {
  let x = document.getElementById("nif").value;

  let text;
  if (x.length < 9 || x.length > 9) {
    text = "NIF inválido. Por favor introduza um NIF válido com 9 dígitos.";
  } else {
    text = "";
  }
  document.getElementById("warning-nif").innerHTML = text;
};
