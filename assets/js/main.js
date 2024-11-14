$('#hamburger').on('click', function () {
  $(this).toggleClass('active');
  $('.menu1').toggleClass('active');
});


$('.letter').each((i, el) => $(el).css('animation-delay', `${i * 0.1}s`));

setTimeout(() => $('#textContainer').addClass('end'), $('.letter').length * 100);

$(function () {
  const end = 3000, duration = 1000, increment = 50;
  const stepTime = duration / (end / increment);
  const $counter = $('#counter').css('opacity', 0);

  new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
          $counter.css('opacity', 1);
          let counter = 0;
          const interval = setInterval(() => {
              counter += increment;
              $counter.text(counter >= end ? '3k' : counter);
              if (counter >= end) clearInterval(interval);
          }, stepTime);
          observer.disconnect();
      }
  }).observe($counter[0]);
});

