const langContainer = document.querySelector(".langouge-container");
const navToggle = document.querySelector(".nav-toggle");
const bars = document.querySelectorAll(".bar");
const nav = document.querySelector("nav");
const imageShow = document.querySelector(".imageShow");
const imagesContainer = document.querySelectorAll(".images-container");
const dialog = document.querySelector(".dialog");
const close = document.querySelector(".close")

navToggle.addEventListener("click", toggleHamburger);
langContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("rotate")) {
    if (e.target.classList.contains("rotate")) {
      // Get the current rotation value (if any) or default to 0
      var currentRotation =
        e.target.style.transform.replace(/[^0-9\-]/g, "") || 0;

      // Rotate by 180 degrees more than the current rotation
      var newRotation = parseInt(currentRotation) + 360;

      // Apply the new rotation
      e.target.style.transform = "rotate(" + newRotation + "deg)";
    }
    console.log(e.target);
  }
});
close.addEventListener('click' ,() =>{
  dialog.classList.toggle("show-dialog-class")
})
// show image function

showImage(imagesContainer);
function showImage(imageArray) {
  imageArray.forEach((imageLayer) => {
    imageLayer.addEventListener("click", function (e) {
      console.log(e.clientY);
      const imageSrc = e.target.previousElementSibling.src;

      dialog.style.top =
        e.target.parentElement.getBoundingClientRect().top +
        window.scrollY +
        "px";

      dialog.querySelector("img").src = imageSrc; 
      dialog.classList.toggle("show-dialog-class")
    });
  });
}
function toggleHamburger(e) {
  bars.forEach((bar) => bar.classList.toggle("x"));
  nav.classList.toggle("toogleNavBar");
}
