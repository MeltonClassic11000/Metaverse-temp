$('#hamburger').on('click', function () {
  $(this).toggleClass('active');
  $('.menu1').toggleClass('active');
});


$('.letter').each((i, el) => $(el).css('animation-delay', `${i * 0.1}s`));

setTimeout(() => $('#textContainer').addClass('end'), $('.letter').length * 100);
