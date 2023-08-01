export const login = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');

  homeDiv.textContent = 'Welcome to GO!Travel';

  buttonHome.textContent = '< Back';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  homeDiv.appendChild(buttonHome);

  return homeDiv;
};
