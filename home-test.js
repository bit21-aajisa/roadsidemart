
// Notification Rotation
let notifications = ["< Malawi's Favorite Local Store! >", "< Free Shipping On Orders Over MWK100,000 >", "< Get Up to 50% Off On Your Selected Items! >"];
let notificationIndex = 0;
const notificationText = document.getElementById("notificationText");

setInterval(() => {
  notificationIndex = (notificationIndex + 1) % notifications.length;
  notificationText.textContent = notifications[notificationIndex];
}, 3000);

// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById("hamburgerMenu");
const offsideMenu = document.getElementById("offsideMenu");
const closeBtn = document.getElementById("closeBtn");

hamburgerMenu.addEventListener("click", () => {
  offsideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  offsideMenu.style.display = "none";
});

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "flex";
}

// Auto slide (optional)
setInterval(function() {
  plusSlides(1);
}, 5000);
