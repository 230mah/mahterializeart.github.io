// comportamento simples: quando clicar thumb, abre a imagem em nova aba (ou substituir para modal)
document.addEventListener('click', function(e){
  const t = e.target;
  if(t.matches('.thumb')){
    const full = t.getAttribute('data-full') || t.src;
    // abre em nova aba (Mercado Pago em outra aba)
    window.open(full, '_blank');
  }
});
