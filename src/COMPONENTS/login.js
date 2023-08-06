import {
  saveForm,
  getForm,
  onGetPost,
  deletePost,
  updatePost,
} from '../firebase';

export const login = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('divPadre');

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Log out';
  buttonHome.classList.add('buttonHome');
  homeDiv.appendChild(buttonHome);

  const banner = document.createElement('header');
  banner.classList.add('banner');
  homeDiv.appendChild(banner);


  const logo = document.createElement('img');
  logo.src = '../logo.png';
  logo.classList.add('logoPost');
  banner.appendChild(logo);

  const welcome = document.createElement('h1');
  welcome.classList.add('welcome');
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

  const descriptions = document.createElement('textarea');
  descriptions.placeholder = 'Describe your trip...';
  descriptions.id = 'description';
  description.classList.add('inputDescription');

  const buttonPost = document.createElement('button');
  buttonPost.classList.add('buttonPost');
  buttonPost.textContent = 'Post';
  buttonPost.id = 'update';

  /*----------------------------------------------*/

  let edi = false;
  let id = '';
 

  const container = document.createElement('div');
  container.id = 'containerData';
  container.classList.add('containerDataPost');

  window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getForm();
    onGetPost(
      querySnapshot.forEach((doc) => {
        const postData = doc.data();

  const postTitles = document.createElement('h3');
  postTitles.id = 'postTitles';
  postTitles.textContent = titles.value;

  const postDescriptions = document.createElement('p');
  postDescriptions.id = 'postDescriptions';
  postDescriptions.textContent = descriptions.value;


  // Eventos
  

        const containerPost = document.createElement('div');
        containerPost.classList.add('containerPostview');

        const emailAutor = document.createElement('h3');
        emailAutor.textContent = postData.autor;
        containerPost.appendChild(emailAutor);

        const lineBar = document.createElement('hr');
        containerPost.appendChild(lineBar);

        const titlesPost = document.createElement('h3');
        titlesPost.id = 'postTitles';
        titlesPost.textContent = postData.titles;
        containerPost.appendChild(titlesPost);

        const descriptionsPost = document.createElement('p');
        descriptionsPost.id = 'postDescriptions';
        descriptionsPost.textContent = postData.descriptions;
        containerPost.appendChild(descriptionsPost);

        const containerButton = document.createElement('div');
        containerButton.classList.add('containerBttn');
        containerPost.appendChild(containerButton);

        const buttonLike = document.createElement('button');
        buttonLike.id = 'buttonlike';
        buttonLike.classList.add('bttnlike');
        
        containerButton.appendChild(buttonLike);

        const sumLike = document.createElement('p');
        sumLike.id = 'sumlikes';
        sumLike.classList.add('sumLikes');
        sumLike.textContent = postData.likes.length;
        containerButton.appendChild(sumLike);

        const userTitle = JSON.parse(localStorage.getItem('user')).email;
        buttonLike.onclick = () => {
          if (postData.likes.includes(userTitle)) {
            const indice = postData.likes.indexOf(userTitle);
            postData.likes.splice(indice, 1);
          } else {
            postData.likes.push(userTitle);
          }
          updatePost(doc.id, { likes: postData.likes }).then(() => {
            window.location.reload();
          });
        };

        if (postData.autor === userTitle) {
          const buttonEdit = document.createElement('button');
          buttonEdit.classList.add('btnEdit');
          buttonEdit.type = 'edit';
          
          containerButton.appendChild(buttonEdit);

          const btnsEdit = containerPost.querySelectorAll('.btnEdit');

          btnsEdit.forEach((btn) => {
            btn.addEventListener('click', async () => {
              document.getElementById('title').value = doc.data().titles;
              document.getElementById('description').value = doc.data().descriptions;

              edi = true;
              id = doc.id;
            });
          });
        }
        if (postData.autor === userTitle) {
          const buttonDelete = document.createElement('button');
          buttonDelete.classList.add('bttnDelete');
          buttonDelete.type = 'delete';
          containerButton.appendChild(buttonDelete);

          const btnsDelete = containerPost.querySelectorAll('.bttnDelete');
          btnsDelete.forEach((btn) => {
            btn.addEventListener('click', () => {
              alert('Your post was permanently deleted');

              deletePost(doc.id).then(() => {
                window.location.reload();
              });
            });
          });
        }
        container.appendChild(containerPost);
   
}),
 // Button Formulario
 form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userTitle = JSON.parse(localStorage.getItem('user')).email;

  if (titles.value === '' || descriptions.value === '') {
    alert('Complete all fields correctly');
  } else if (!edi) {
    saveForm(titles.value, descriptions.value, userTitle).then(() => {
      window.location.reload();
    });
  } else {
    updatePost(id, { titles: titles.value, descriptions: descriptions.value }).then(() => {
      window.location.reload();
    });
    edi = false;
  }
  form.reset();

})
  )
});

  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.textContent = '© Copyrigth. All rigths reserved. Go! Travel  Naylimar Alvarez';

  homeDiv.appendChild(form);
  form.appendChild(title);
  form.appendChild(titles);
  form.appendChild(description);
  form.appendChild(descriptions);
  form.appendChild(buttonPost);
  homeDiv.appendChild(container);
  homeDiv.appendChild(footer);

  return homeDiv;
  
};
