import { getData, sendData } from "../firebase";

export const login = (onNavigate) => {
  const homeDiv = document.createElement("div");

  homeDiv.textContent = "Welcome to GO!Travel";

  const buttonHome = document.createElement("button");
  buttonHome.textContent = "Log out";
  buttonHome.addEventListener("click", () => onNavigate("/"));

  const inputPost = document.createElement("input");
  inputPost.classList.add("inputPost");
  inputPost.placeholder = "write your travel...";

  const buttonPost = document.createElement("button");
  buttonPost.classList.add("buttonPost");
  buttonPost.textContent = "Post";

  buttonPost.addEventListener("click", () => getData());

  buttonPost.addEventListener('click',() => {
    sendData('camila.alejandra.lupe@outlook.com', 'texto').then((result)=>(console.log(result)))
    //getData()
    
  });

  
  const logo = document.createElement('img');
  logo.src = '../logo.png';
  logo.classList.add('logoPost');

  const logoUser = document.createElement('img');
  logoUser.src = '../logouser.png';
  logoUser.classList.add('logoUser');
  
  homeDiv.appendChild(buttonHome);
  homeDiv.appendChild(logoUser);
  homeDiv.appendChild(inputPost);
  homeDiv.appendChild(buttonPost);
  homeDiv.appendChild(logo);

  return homeDiv;
  
};
