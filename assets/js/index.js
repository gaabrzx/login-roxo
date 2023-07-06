const email = document.querySelector("#input-email");
const link = document.querySelector("#notContainer a");
const link2 = document.querySelector("#notContainer2 a");
const container = document.querySelector("#notContainer");
const containerLogin = document.querySelector("#notContainer2");

link.addEventListener("click", () => {
  email.style.display = "none";
  container.style.display = "none";
  containerLogin.style.display = "block";
});

link2.addEventListener("click", () => {
  email.style.display = "flex";
  container.style.display = "block";
  containerLogin.style.display = "none";
});
