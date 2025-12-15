const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".galeria img").forEach(img=>{
  img.onclick = ()=>{
    modal.style.display="flex";
    modalImg.src=img.src;
  }
});

modal.onclick = ()=> modal.style.display="none";
