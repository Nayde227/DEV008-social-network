export const forgot = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');

  homeDiv.textContent = 'Recover your password';

  buttonHome.textContent = '< Back';
  buttonHome.addEventListener("click", () => onNavigate("/"));
  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
