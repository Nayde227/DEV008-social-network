import { onNavigate } from "../main.js";

export const login = () => {
  const homeDiv = document.createElement("div");
  const buttonHome = document.createElement("button");

  homeDiv.textContent = "Bienvenido a GO!Travel";

  buttonHome.textContent = "regresar al home";
  buttonHome.addEventListener("click", () => onNavigate("/"));
  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
