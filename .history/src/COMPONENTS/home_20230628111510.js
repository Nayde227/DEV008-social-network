import { onNavigate } from "../main.js";

export const home = () => {
  const homeDiv = document.createElement("div");

  const buttonRegister = document.createElement("button");
  buttonRegister.classList.add("buttonReg");  //vinculando con las clases, //add para añadir
  const buttonLogin = document.createElement("button");

  buttonRegister.textContent = "Registrate";
  buttonLogin.textContent = "Inicia Sesión";

  buttonRegister.addEventListener("click", () => onNavigate("/register"));
  buttonLogin.addEventListener("click", () => onNavigate("/login"));

  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonLogin);

  return homeDiv;
};
