const photos = document.getElementById("gallery");
let autoIncrement = 1;

function showPhotos() {
  fetch("http://localhost:3000/gallery")
    .then((response) => response.json())
    .then((data) => {
      autoIncrement = data.length + 1;
      photos.innerHTML = "";
      data.forEach((photo) => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${photo.id} | ${photo.title}</p><img src='${photo.link}'>`;
        div.addEventListener('click', () => {
          const dialog = document.createElement('dialog')
          div.appendChild(dialog)
          dialog.innerHTML = `<button class="x" id="${photo.id}btn-close">X</button><p>Autor: ${photo.creator}</p><p>Descrição: ${photo.description}</p>`
          const btn = document.getElementById(`${photo.id}btn-close`)
          btn.addEventListener('click', () => {
            console.log("clickado")
            window.location.reload()
          })
          dialog.showModal()

        })
        photos.appendChild(div);
      });
    })
    .catch(error => console.error(error));
}

const btn_post = document.getElementById("post_submit");

btn_post.addEventListener('submit', (e) => {
  e.preventDefault()

  const link = document.getElementById('post_link').value;
  const title = document.getElementById('post_title').value;
  const creator = document.getElementById('post_creator').value;

  fetch("http://localhost:3000/gallery", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: autoIncrement, link: link, title: title, creator: creator })
  })
    .then((response) => response.json())
    .then((data) => {
      showPhotos();
      data.reset();
    })
    .catch(error => console.error('Erro:', error))

})

const btn_delete = document.getElementById("delete_submit");

btn_delete.addEventListener('submit', (e) => {
  e.preventDefault()

  const id = document.getElementById('delete_id').value

  fetch(`http://localhost:3000/gallery/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      showPhotos();
      data.reset();
    })
    .catch(error => console.error('Erro:', error))
})

const btn_put = document.getElementById("put_submit");

btn_put.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('put_id').value
  const link = document.getElementById('put_link').value
  const title = document.getElementById('put_title').value

  fetch(`http://localhost:3000/gallery//${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id, title: title, link: link }),
  })
    .then(response => { response.json() })
    .then((data) => {
      showPhotos();
      data.reset()
    })
    .catch(error => console.error(error.message));
}
)

function closeModal(modal) {
  modal.close()
}



showPhotos();