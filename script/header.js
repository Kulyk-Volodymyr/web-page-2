const HeaderNavButton = document.getElementById('header-nav-button-border');
const HeaderNav = document.getElementById('header-nav');
HeaderNavButton.addEventListener('click', headerNavbar);
function headerNavbar() {
    HeaderNav.classList.toggle('show-navbar');
    HeaderNavButton.classList.toggle('nav-pointer-down');
}
