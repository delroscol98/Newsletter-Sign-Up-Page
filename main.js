const emailInput = document.querySelector("input");
const signUpSect = document.querySelector(".sign-up");
const successSect = document.querySelector(".success");
const main = document.querySelector("main");
const errorMsg = document.querySelector("#error-message");
const submitBtn = document.querySelector("#submit");
const dismissBtn = document.querySelector("#dismiss");

const validateForm = (e) => {
  e.preventDefault();

  const userEmail = emailInput.value;
  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (regx.test(userEmail)) {
    signUpSect.classList.toggle("hidden");
    successSect.classList.toggle("hidden");
    main.style.width = "35%";
  } else {
    errorMsg.classList.remove("hidden");
    emailInput.classList.add("error");
  }
};

const dismissSuccessMsg = (e) => {
  e.preventDefault();

  signUpSect.classList.toggle("hidden");
  successSect.classList.toggle("hidden");
  main.style.width = "64.444%";

  emailInput.value = "";
  errorMsg.classList.toggle("hidden");
  emailInput.classList.toggle("error");
};

submitBtn.addEventListener("click", validateForm);
dismissBtn.addEventListener("click", dismissSuccessMsg);
