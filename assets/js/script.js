// CAROUSEL
document.querySelectorAll(".produto-carousel").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");
  
  prev.addEventListener("click", () => track.scrollBy({left:-120, behavior:"smooth"}));
  next.addEventListener("click", () => track.scrollBy({left:120, behavior:"smooth"}));
});

// LIGHTBOX
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".produto-carousel img.thumb").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target === modal) modal.style.display = "none"; }
