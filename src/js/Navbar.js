class Navbar {
    constructor() {
        this.stickyNavEvent();
        this.mobileMenu();
    }

    stickyNavEvent() {
        window.onscroll = function() {myFunction()};
        const navbar = document.querySelector("nav");
        const landingTop = document.querySelector('.landing-top');
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
    }

    mobileMenu() {
        const mobileIcon = document.querySelector('#nav-icon1');

        mobileIcon.addEventListener('click', () => {
            mobileIcon.classList.toggle('open');
        })
    }
}

export default Navbar;