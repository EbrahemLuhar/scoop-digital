// ScrollOut({
//     threshold: 0.5
// });

// var rellax = new Rellax('.rellax');

window.onscroll = function() {myFunction()};

// Get the navbar
const navbar = document.querySelector("nav");

const landingTop = document.querySelector('.landing-top');

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    landingTop.style.marginTop = "60px";
  } else {
    navbar.classList.remove("sticky");
    landingTop.style.marginTop = "0";
  }
}

const mobileIcon = document.querySelector('#nav-icon1');

mobileIcon.addEventListener('click', () => {
    mobileIcon.classList.toggle('open')
})