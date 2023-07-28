import { deleteDoc } from 'firebase/firestore';
import {
  saveForm,
  getForm,
  onGetPost,
  deletePost,
  editPost,
  updatePost
} from '../firebase';

export const login = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('divPadre')

  const banner = document.createElement('header');
  banner.classList.add('banner');
  homeDiv.appendChild(banner)

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Log out';
  buttonHome.classList.add('buttonHome');
  banner.appendChild(buttonHome);
  
  const logo = document.createElement('img');
  logo.src = '../logo.png';
  logo.classList.add('logoPost');
  banner.appendChild(logo);

  const welcome = document.createElement('h1');
  welcome.classList.add('welcome')
  welcome.textContent = 'Welcome to GO! Travel';
  banner.appendChild(welcome);

 

  buttonHome.addEventListener('click', () => onNavigate('/'));

  // Formulario
  const form = document.createElement('form');
  form.classList.add('form');

  const title = document.createElement('label');
  title.textContent = 'Title';

  const titles = document.createElement('input');
  titles.placeholder = 'Title of your trip...';
  titles.id = 'title';

  const description = document.createElement('label');
  description.textContent = 'Description';

  const descriptions = document.createElement('input');
  descriptions.placeholder = 'Describe your trip...';
  descriptions.id = 'description';
  description.classList.add('inputDescription');

  const buttonPost = document.createElement('button');
  buttonPost.classList.add('buttonPost');
  buttonPost.textContent = 'Post';
  buttonPost.id = 'update';

  /*----------------------------------------------*/
  const container = document.createElement('div');
  container.id = 'containerData';
  container.classList.add('containerDataPost');

  const postTitles = document.createElement('h3');
  postTitles.id = 'postTitles';
  postTitles.textContent = titles.value;

  const postDescriptions = document.createElement('p');
  postDescriptions.id = 'postDescriptions';
  postDescriptions.textContent = descriptions.value;

  let edi = false;
  let id = '';

  // Eventos
  window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getForm();
    onGetPost(
      querySnapshot.forEach((doc) => {
        const postData = doc.data();

        const containerPost = document.createElement('div');
        containerPost.classList.add('containerPostview');

        const emailAutor = document.createElement('div');
        emailAutor.textContent = postData.autor;
        containerPost.appendChild(emailAutor);

        const postTitles = document.createElement('h3');
        postTitles.id = 'postTitles';
        postTitles.textContent = postData.titles;
        containerPost.appendChild(postTitles);

        const postDescriptions = document.createElement('p');
        postDescriptions.id = 'postDescriptions';
        postDescriptions.textContent = postData.descriptions;
        containerPost.appendChild(postDescriptions);

        const containerButton = document.createElement('div')
        containerButton.classList.add('containerBttn');
        containerPost.appendChild(containerButton)

        //botón like
        const buttonLike = document.createElement('button');
        buttonLike.id = 'buttonlike';
        buttonLike.classList.add('bttnlike');
        buttonLike.textContent = 'Like';
        containerButton.appendChild(buttonLike);

        //contador de likes
        const sumLike = document.createElement('button');
        sumLike.id = 'sumlikes';
        sumLike.classList.add('sumLikes');
        sumLike.textContent = postData.likes.length;
        containerButton.appendChild(sumLike);

        const userTitle = JSON.parse(localStorage.getItem('user')).email;
        buttonLike.onclick = function () {
          if (postData.likes.includes(userTitle)) {
            const indice = postData.likes.indexOf(userTitle);
            postData.likes.splice(indice, 1);
          } else {
            postData.likes.push(userTitle)
          }
          updatePost(doc.id, { likes: postData.likes }).then(() => {
            window.location.reload();
          });
        }
        // Boton Delete
        if (postData.autor === userTitle) {

          const buttonDelete = document.createElement('button');
          buttonDelete.classList.add('bttnDelete');
          buttonDelete.type = 'delete';
          buttonDelete.textContent = 'Delete';
          containerButton.appendChild(buttonDelete);


          const btnsDelete = containerPost.querySelectorAll('.bttnDelete');
          btnsDelete.forEach((btn) => {

            btn.addEventListener('click', ({ target: { dataset } }) => {
              alert('Your post was permanently deleted');
              console.log(doc.id);

              deletePost(doc.id).then(() => {
                window.location.reload();

              });
            });
          });
        }

        // Button Edit
        if (postData.autor === userTitle) {
          const buttonEdit = document.createElement('button');
          buttonEdit.classList.add('btnEdit');
          buttonEdit.type = 'edit';
          buttonEdit.textContent = 'Edit';
          containerButton.appendChild(buttonEdit);
          const btnsEdit = containerPost.querySelectorAll('.btnEdit');

          btnsEdit.forEach((btn) => {
            btn.addEventListener('click', async ({ target: { dataset } }) => {
              const edition = await editPost(doc.id);
              document.getElementById('title').value = doc.data().titles;
              document.getElementById('description').value = doc.data().descriptions;

              edi = true;
              id = doc.id;

            });
          });
        };
        container.appendChild(containerPost);
      })
    );
  });

  // Button Formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userTitle = JSON.parse(localStorage.getItem('user')).email;

    if (titles.value === '' || descriptions.value === '') {
      alert('Complete all fields correctly')
    }
    else if (!edi) {
      console.log(userTitle)
      saveForm(titles.value, descriptions.value, userTitle).then(() => {
        window.location.reload();
      })
    }
    else {
      updatePost(id, { titles: titles.value, descriptions: descriptions.value }).then(() => {
        window.location.reload();
      })
      edi = false;
    }
    form.reset();
  });

  
  homeDiv.appendChild(form);
  form.appendChild(title);
  form.appendChild(titles);
  form.appendChild(description);
  form.appendChild(descriptions);
  form.appendChild(buttonPost);
  homeDiv.appendChild(container);

  return homeDiv;
};
