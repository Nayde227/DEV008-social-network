// import { async } from "regenerator-runtime";
import { deleteDoc } from 'firebase/firestore';
import { saveForm, getForm, onGetPost, /*deletePost*/ } from '../firebase';

export const login = (onNavigate) => {
  const homeDiv = document.createElement('div');

  homeDiv.textContent = 'Welcome to GO!Travel';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Log out';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  const form = document.createElement('form');
  form.classList.add('form');

  const title = document.createElement('label');
  title.textContent = 'Title';
  const titles = document.createElement('input');
  titles.placeholder = 'Title';

  const description = document.createElement('label');
  description.textContent = 'Description';
  const descriptions = document.createElement('input');
  descriptions.placeholder = 'Description';
  description.classList.add('inputDescription');

  const buttonPost = document.createElement('button');
  buttonPost.classList.add('buttonPost');
  buttonPost.textContent = 'Post';

  const container = document.createElement('div');
  container.id = 'containerData';
  container.classList.add('containerDataPost');

  const postTitles = document.createElement('h3');
  postTitles.id = 'postTitles';
  postTitles.textContent = titles.value;

  const postDescriptions = document.createElement('p');
  postDescriptions.id = 'postDescriptions';
  postDescriptions.textContent = descriptions.value;

  // Eventos
  window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getForm();
    //const containerData = document.getElementById('containerData');

    onGetPost(querySnapshot.forEach((doc) => {
      const postData = doc.data();
      //console.log(doc.id)
      const containerPost = document.createElement('div');
      containerPost.classList.add('containerPostview');

      const postTitles = document.createElement('h3');
      postTitles.id = 'postTitles';
      postTitles.textContent = postData.titles;
      containerPost.appendChild(postTitles);

      const postDescriptions = document.createElement('p');
      postDescriptions.id = 'postDescriptions';
      postDescriptions.textContent = postData.descriptions;
      containerPost.appendChild(postDescriptions);

      const buttonDelete = document.createElement('button');
      buttonDelete.classList.add('bttnDelete');
      buttonDelete.type = 'delete';
      buttonDelete.textContent = 'Delete';
      containerPost.appendChild(buttonDelete);

      const btnsDelete = containerPost.querySelectorAll('.bttnDelete');
      btnsDelete.forEach(btn => {

        btn.addEventListener('click', ({ target: { dataset } }) => {
          console.log(doc.id)
          //deletePost(dataset.id)
        })
      })

      container.appendChild(containerPost);


    }));

  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    saveForm(titles.value, descriptions.value);
    form.reset();
  });

  const logo = document.createElement('img');
  logo.src = '../logo.png';
  logo.classList.add('logoPost');

  const logoUser = document.createElement('img');
  logoUser.src = '../logouser.png';
  logoUser.classList.add('logoUser');

  homeDiv.appendChild(buttonHome);

  // homeDiv.appendChild(logo);
  homeDiv.appendChild(form);
  form.appendChild(title);
  form.appendChild(titles);
  form.appendChild(description);
  form.appendChild(descriptions);
  form.appendChild(buttonPost);
  homeDiv.appendChild(container)


  /* homeDiv.appendChild(logoUser); */
  return homeDiv;
};
