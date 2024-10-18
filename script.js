document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                hideAllSections();
                targetSection.style.display = 'block';
            }
        });
    });

    hideAllSections();
    if (sections.length > 0) {
        sections[0].style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.getElementById("showNavbar");
    const navBar = document.getElementById("navbar");

    burgerIcon.addEventListener('click', function () {
        if (navBar.classList.contains('active')) {
            navBar.classList.remove('active');
        } else {
            navBar.classList.add('active');
        }
    });
});
