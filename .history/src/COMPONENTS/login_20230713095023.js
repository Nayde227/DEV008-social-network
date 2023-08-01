//import { async } from "regenerator-runtime";
import { saveForm, getForm } from "../firebase";

export const login = (onNavigate) => {
  const homeDiv = document.createElement("div");

  homeDiv.textContent = "Welcome to GO!Travel";

  const buttonHome = document.createElement("button");
  buttonHome.textContent = "Log out";
  buttonHome.addEventListener("click", () => onNavigate("/"));

  const form = document.createElement("form");
  form.classList.add("form");

  const title = document.createElement("label");
  title.textContent = "Title";
  const titles = document.createElement("input");
  titles.placeholder = "Title";

  const description = document.createElement("label");
  description.textContent = "Description";
  const descriptions = document.createElement("input");
  descriptions.placeholder = "Description";
  description.classList.add("inputDescription");

  const buttonPost = document.createElement("button");
  buttonPost.classList.add("buttonPost");
  buttonPost.textContent = "Post";

  //Eventos
  window.addEventListener("DOMContentLoaded", async () => {
    const querySnapshot = await getForm();
    const containerData = document.getElementById("containerData");

    let html = "";
    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      html += `
    <div>
      <h3>${postData.titles}</h3>
      <p>${postData.descriptions}</p>
    </div> 
    `;
    });

    containerData.innerHTML = html
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    saveForm(titles.value, descriptions.value);
    form.reset();
  });

  const logo = document.createElement("img");
  logo.src = "../logo.png";
  logo.classList.add("logoPost");

  const logoUser = document.createElement("img");
  logoUser.src = "../logouser.png";
  logoUser.classList.add("logoUser");

  homeDiv.appendChild(buttonHome);

  //homeDiv.appendChild(logo);
  homeDiv.appendChild(form);
  form.appendChild(title);
  form.appendChild(titles);
  form.appendChild(description);
  form.appendChild(descriptions);
  form.appendChild(buttonPost);

  /*homeDiv.appendChild(logoUser);*/
  return homeDiv;
};
