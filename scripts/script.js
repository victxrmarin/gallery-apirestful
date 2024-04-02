const photos = document.getElementsById("gallery");

async function showPhotos() {
  fetch("http://localhost:3000/gallery")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((photo) => {
        const div = document.createElement("div");
        div.innerHTML = `<img src=${photo.link}>`;
        photos.appendChild(div);
      });
    });
}

search.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("search-bar");
  let inputed = input.value.toLowerCase();

  fetch("http://localhost:3000/gallery", {
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((photo) => {
        photos.forEach((div)=> {
            let title = photo.title.toLowerCase();
            if(!title.incluedes(inputed)) {
                div.style.display = "none";
            }
        })
      });
    });
});

showPhotos();