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




// search.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const input = document.getElementById("search-bar");
//   let inputed = input.value.toLowerCase();

//   fetch("http://localhost:3000/gallery", {
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((photo) => {
//         photos.forEach((div)=> {
//             let title = photo.title.toLowerCase();
//             if(!title.incluedes(inputed)) {
//                 div.style.display = "none";
//             }
//         })
//       });
//     });
// });

// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("pput");
var btn = document.getElementById("put");
var span = document.getElementsByClassName("close")[1];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("pdelete");
var btn = document.getElementById("delete");
var span = document.getElementsByClassName("close")[2];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


showPhotos();