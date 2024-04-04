document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submitButton").addEventListener("click",validateLogin);
})

function validateLogin() {
  window.location.href = "index.html";
};