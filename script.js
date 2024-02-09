const arrowUpButton = document.getElementById("scroll-to-top");

window.onscroll = function() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrowUpButton.style.display = "block";
  } else {
    arrowUpButton.style.display = "none"
  }
};

arrowUpButton.addEventListener("click", ()=> {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent! We will get back to you shortly.');
});



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
      delay: 3000, // Set the time between slides (in milliseconds), e.g., 3000ms or 3 seconds
      disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
    },

  });
  