<script>
  document.querySelectorAll('.produto').forEach(produto => {
    const mainImg = produto.querySelector('.main-img');
    const thumbs = produto.querySelectorAll('.thumb');

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        mainImg.src = thumb.src;

        // Remove active de todas
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  });
</script>
