const firstSection = document.getElementById("firstSection");
const secondSection = document.getElementById("secondSection");

const registerButton = document
  .getElementById("firstLink")
  .addEventListener("click", function () {
    firstSection.style.display = "none";
    secondSection.style.display = "flex";
  });

const loginButton = document
  .getElementById("secondLink")
  .addEventListener("click", function () {
    firstSection.style.display = "flex";
    secondSection.style.display = "none";
  });

console.log("SIM");
