import { onNavigate } from "../main.js";

export const register = () => {
  const homeDiv = document.createElement("div");
  const buttonHome = document.createElement("button");

  homeDiv.textContent = "Bienvenido al registro";

  buttonHome.textContent = "regresar al home";
  buttonHome.addEventListener("click", () => onNavigate("/"));
  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
