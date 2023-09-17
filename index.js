document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav a');
    window.addEventListener('scroll', function () {
        var current = "";
        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
