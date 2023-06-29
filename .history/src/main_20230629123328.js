// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();
import { home } from './COMPONENTS/home.js';
import { register } from './COMPONENTS/register.js';
import { login } from './COMPONENTS/login.js';
import { forgot } from './COMPONENTS/forgot.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
  '/forgot': forgot,
};

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname](onNavigate));
};
const component = routes[window.location.pathname];
window.onpopstate = () => {
  rootDiv.appendChild(component(onNavigate));
};

rootDiv.appendChild(component(onNavigate));
