document.addEventListener("DOMContentLoaded", function () {

  
    fetch("./header-breadcramp/header.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        document.getElementById("header").innerHTML = data;
      })
      .catch((err) => {
        console.log("There was a problem with the fetch operation:", err);
      });
    



  let currentSlide = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll(".slides");
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === currentSlide) {
        slide.classList.add("active");
      }
    });
  }

  function changeSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
  }

  // Optional: Auto slideshow
  setInterval(() => {
    changeSlide(1);
  }, 5500);
});
