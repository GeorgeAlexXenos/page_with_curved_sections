const submit = document.getElementById("submit");
const email = document.getElementById("email");
const error = document.getElementById("error_msg");
const emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value === "" || !email.value.match(emailPattern)) {
    email.style.border = "3px solid var(--lightRed)";
    error.classList.toggle("show");

    setTimeout(() => {
      email.style.border = "";
      error.classList.remove("show");
      email.value = "";
    }, 1800);
  }
});
