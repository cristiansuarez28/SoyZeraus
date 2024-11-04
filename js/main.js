function setHeaderMenuHeight() {
    const element = document.querySelector('.header-menu');
    if (element) {
    if (element.classList.contains('responsive-open')) {
        element.classList.remove('responsive-open');
        element.classList.add('responsive-close');
    } else {
        element.classList.remove('responsive-close');
        element.classList.add('responsive-open');
    }
    }
}