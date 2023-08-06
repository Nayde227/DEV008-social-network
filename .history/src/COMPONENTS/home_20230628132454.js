import { onNavigate } from "../main.js";

export const home = () => {
  const homeDiv = document.createElement("div"); // Div padre
  homeDiv.classList.add("buttonHome");

  const buttonLogin = document.createElement("button");
  buttonLogin.classList.add("buttonLog");

  const buttonRegister = document.createElement("button");
  buttonRegister.classList.add("buttonReg");

  buttonRegister.textContent = "Sing Up";
  buttonLogin.textContent = "Log in";

  buttonLogin.addEventListener("click", () => onNavigate("/login"));
  buttonRegister.addEventListener("click", () => onNavigate("/register"));

  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonRegister);
  return homeDiv;
};
const logoDiv = document.createElement("div");

const emails = document.createElement("h2");
emails.textContent = "E-mail";
emails.classList.add("email");
logoDiv.appendChild(emails);
document.getElementById("homeDiv").appendChild(logoDiv);