const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".hero-image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".hero-content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".hero-content .description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".hero-button", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".hero-stats", { ...scrollRevealOption, delay: 2000 });
ScrollReveal().reveal(".about-image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about-text .section-title", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about-text .description", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal(".about-button", { ...scrollRevealOption, delay: 2000 });
ScrollReveal().reveal(".program-card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".service-image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".service-text .section-title", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service-list li", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal(".service-button", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".testimonial-card", {
  ...scrollRevealOption,
  interval: 500,
});
const swiper = new Swiper(".swiper", { loop: true });
