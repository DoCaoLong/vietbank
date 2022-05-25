AOS.init({
    disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
    },
});

const menuHeader = document.querySelector(".nav");
const menuToggle = document.querySelector(".header-mobile__btn");
menuToggle.addEventListener("click", function (e) {
    // menuHeader.classList.contains(expandClass)
    //     ? menuHeader.classList.remove(expandClass)
    //     : menuHeader.classList.add(expandClass);
    menuHeader.classList.toggle("is-expand");
}),
    window.addEventListener("click", function (e) {
        e.target.contains(menuToggle) ||
            menuHeader.classList.remove("is-expand");
    });
