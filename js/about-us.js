window.addEventListener('scroll', function() {
    // var image = document.querySelector('img');
    var section = document.querySelector('.about-us');
    // var imageBottom = image.getBoundingClientRect().bottom + window.scrollY;
    if (window.scrollY >= 1600) {
        section.classList.add('reveal');
    } else {
        section.classList.remove('reveal');
    }
});