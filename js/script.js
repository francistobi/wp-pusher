const firstName = document.querySelector("#firstName");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const ccDetail = document.querySelector(".ccinput");
const buyBtn = document.querySelector(".Buy-button");
const errorMessage = document.querySelector(".errorM");

buyBtn.addEventListener("click", () => {
  validateinput();
});

function validateinput() {
  if (!firstName.value) {
    firstName.style.border = "2px solid red";
    firstName.placeholder = "";
    errorMessage.textContent = "Please fill out all required fields.";
  } else {
    firstName.style.border = "none";
    errorMessage.textContent= "";
  }
  if (!lastname.value) {
    lastname.style.border = "2px solid red";
    lastname.placeholder = "";
    errorMessage.textContent = "Please fill out all required fields.";
  } else {
    lastname.style.border = "none";
    errorMessage.textContent= ""
  }
  if (!email.value) {
    email.style.border = "2px solid red";
    email.placeholder = "";
    errorMessage.textContent = "Please fill out all required fields.";
  } else {
    email.style.border = "none";
    errorMessage.textContent= "";
  }
  if (!ccDetail.value) {
    ccDetail.style.border = "2px solid red";
    ccDetail.placeholder = "";
    errorMessage.textContent = "Please fill out all required fields.";
  } else {
    ccDetail.style.border = "none";
    errorMessage.textContent= "";
  }
  if (!firstName || !lastname || !email || !ccDetail) {
  }
}
