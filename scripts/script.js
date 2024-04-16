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
        div.innerHTML = `<p>${photo.title}</p><img src='${photo.link}'>`;
        photos.appendChild(div);
      });
    })
    .catch(error => console.error(error));
}

const btn_post = document.getElementById("post_submit");
// const btn_put = document.getElementById("put_submit");
// const btn_delete = document.getElementById("delete_submit");

btn_post.addEventListener('submit', (e)=> {
   e.preventDefault()

   const link = document.getElementById('post_link').value;
   const title = document.getElementById('post_title').value;
   const creator = document.getElementById('post_creator').value;

   fetch("http://localhost:3000/gallery", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id: autoIncrement, link: link, title: title, creator: creator})
   })
    .then((response)=> response.json())
    .then((data) => {
      showPhotos();
      data.reset();
    })
    .catch(error => console.error('Erro:', error))

})


showPhotos();