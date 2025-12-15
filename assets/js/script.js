const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const close = document.getElementById("close");

document.querySelectorAll(".thumb").forEach(img=>{
  img.addEventListener("click",()=>{
    modal.style.display="flex";
    modalImg.src=img.src;
  });
});

close.onclick=()=>modal.style.display="none";
modal.onclick=e=>{if(e.target===modal)modal.style.display="none";}
