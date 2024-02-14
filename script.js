const arrowUpButton = document.getElementById("scroll-to-top");

window.onscroll = function() {
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    arrowUpButton.style.display = "block";
  } else {
    arrowUpButton.style.display = "none"
  }
};

arrowUpButton.addEventListener("click", ()=> {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

document.querySelector('email').addEventListener("click", function (e) {
    e.preventDefault();
    alert('Email sent! We will get back to you shortly.');
});



document.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper('.swiper', {
    // Swiper configuration options go here
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Add the "autoplay" option
    autoplay: {
      delay: 4000, // Set the time between slides (in milliseconds), e.g., 3000ms or 3 seconds
      disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
    },

  });
});
  