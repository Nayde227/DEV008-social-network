import { onNavigate } from "../main.js";

export const home = () => {
  const homeDiv = document.createElement("div");// Div padre
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

  const loginDiv = document.createElement("div"); //hijo uno

  const logoGoTravel = document.createElement("img");//caja para las imagenes 
    logoGoTravel.src = ; //src es como js identifica las imagenes // poster es por que asi estan las imagenes en la data de ghibli 
    posters.classList.add("soloPosters");  //vinculando con las clases, ejemplo class list //add para añadir


};
