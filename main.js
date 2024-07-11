//hiding header
let prevScrollPos = window.scrollY;

window.onscroll = function () {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        document.querySelector('header').style.top = '0';
    } else {
        document.querySelector('header').style.top = '-8rem';
    }

    prevScrollPos = currentScrollPos;
};

//responsive nav links on taskbar as you scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });
});

//burger menu
const burgerBtn = document.querySelector(".menu-btn")
const navbar = document.querySelector(".navbar")

const navBarLinks = document.querySelectorAll(".navbar a")

burgerBtn.addEventListener('click', () => {
    navbar.classList.toggle("active")
    burgerBtn.classList.toggle("active")
    document.documentElement.style.overflowY = navbar.classList.contains('active') ? 'hidden' : 'auto'

})

navBarLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navbar.classList.remove("active")
        burgerBtn.classList.remove("active")

        document.documentElement.style.overflowY = 'auto'
    })
})

//footer scroll-up button
var scrollToTopBtn = document.querySelector(".footer-scroll-up a");

scrollToTopBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

//alternating rotate for about images
document.querySelectorAll('.about-img').forEach(function (element) {
    element.addEventListener('mouseenter', function () {
        if (element.classList.contains('rotate-left')) {
            element.classList.remove('rotate-left');
            element.classList.add('rotate-right');
        } else {
            element.classList.remove('rotate-right');
            element.classList.add('rotate-left');
        }
    });
});

//alternating rotate for logo
document.querySelector('.name').addEventListener('mouseenter', function () {
    const nameElement = this;
    if (nameElement.classList.contains('rotate-left')) {
        nameElement.classList.remove('rotate-left');
        nameElement.classList.add('rotate-right');
    } else {
        nameElement.classList.remove('rotate-right');
        nameElement.classList.add('rotate-left');
    }
});

//alternating backgrounds
document.addEventListener('DOMContentLoaded', function () {
    const backgrounds = ['url(images/background.png)', 'url(images/backgroundbw.png)'];
    const homeSection = document.querySelector('.home');
    let currentBackgroundIndex = 0;

    //preload images
    const imageCache = [];
    backgrounds.forEach(background => {
        const img = new Image();
        img.src = background;
        imageCache.push(img);
    });

    function changeBackground() {
        homeSection.style.backgroundImage = backgrounds[currentBackgroundIndex];
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;

        const interval = currentBackgroundIndex === 0 ? 2000 : 5000;  //time in ms

        setTimeout(changeBackground, interval);
    }

    changeBackground();
});