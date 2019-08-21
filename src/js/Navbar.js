class Navbar {
    constructor() {
        this.HamburgerAnimation();
        this.MobileDropDown();
    }

    HamburgerAnimation() {
        const mobileIcon = document.querySelector('#nav-icon1');
        const mobileNav = document.querySelector('#mobile-menu');

        mobileIcon.addEventListener('click', () => {
            mobileIcon.classList.toggle('open');
            mobileNav.classList.toggle('nav-visible');
        });
    }

    CloseDropDowns(arg) {
        for (let i = 0; i < arg.length; i++) {
            arg[i].childNodes[3].style.display = "none";
        }

    }

    MobileDropDown() {
        const mobileDropDownParent = document.querySelectorAll('.mobile-drop-down');

        for(let i = 0; i < mobileDropDownParent.length; i++) {
            mobileDropDownParent[i].addEventListener('click', () => {
                let dropDownStatus = mobileDropDownParent[i].childNodes[3].style.display;

                if (dropDownStatus === "flex") {
                    mobileDropDownParent[i].childNodes[3].style.display = "none";
                } else {
                    mobileDropDownParent[i].childNodes[3].style.display = "flex"; 
                }
            });
        }
    }
}

export default Navbar;