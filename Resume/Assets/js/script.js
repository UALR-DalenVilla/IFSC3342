document.addEventListener("DOMContentLoaded", () => {
  const text = "Dalen Villa";
  let index = 0;
  const titleElement = document.querySelector(".page-title");

  titleElement.textContent = "";

  function typeEffect() {
    if (index < text.length) {
      titleElement.textContent += text[index];
      index++;
      setTimeout(typeEffect, 100);
    }
  }

  typeEffect();

  // Smooth scroll
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
