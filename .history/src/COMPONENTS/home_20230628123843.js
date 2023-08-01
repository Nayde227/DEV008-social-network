import { onNavigate } from "../main.js";

export const home = () => {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("buttonHome");

  const buttonLogin = document.createElement("button");
  buttonLogin.classList.add("buttonLog");

  const buttonRegister = document.createElement("button");
  buttonRegister.classList.add("buttonReg");

  buttonRegister.textContent = "Registrate";
  buttonLogin.textContent = "Inicia Sesión";

  buttonRegister.addEventListener("click", () => onNavigate("/register"));
  buttonLogin.addEventListener("click", () => onNavigate("/login"));

  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonLogin);

  return homeDiv;
};
