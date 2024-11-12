$('#hamburger').on('click', function () {
  $(this).toggleClass('active');
  $('.menu1').toggleClass('active');
});


$('.letter').each((i, el) => $(el).css('animation-delay', `${i * 0.1}s`));

setTimeout(() => $('#textContainer').addClass('end'), $('.letter').length * 100);


$(function() {
  let counterStarted = false;
  const $counterSection = $('#counter-section');
  const $counter = $('#counter');
  let counterValue = 0;

  $(window).on('scroll', function() {
      const windowHeight = $(window).height();
      const sectionTop = $counterSection.offset().top;
      const sectionBottom = sectionTop + $counterSection.outerHeight();
      
      if ($(window).scrollTop() + windowHeight > sectionTop && $(window).scrollTop() < sectionBottom && !counterStarted) {
          counterStarted = true;
          const interval = setInterval(() => {
              if (counterValue < 3000) {
                  counterValue += 10; // Increment by 10
                  $counter.text(counterValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")); // Display with commas
              } else {
                  $counter.text("3K"); // Once 3000 is reached, display "3K"
                  clearInterval(interval);
              }
          }, 10); // Speed of the counter increase (10ms interval)
      }
  });
});
