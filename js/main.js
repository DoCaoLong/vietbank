AOS.init({
    disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
    },
});

const menuHeader = document.querySelector(".header-mobile");
const menuToggle = document.querySelector(".header-mobile__btn");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function (e) {
    menuHeader.classList.contains(expandClass)
        ? menuHeader.classList.remove(expandClass)
        : //   menuToggle.classList.add("fa-bars"),
          //     menuToggle.classList.remove("fa-times", "color-black")
          menuHeader.classList.add(expandClass);
    //   menuToggle.classList.remove("fa-bars"),
    //     menuToggle.classList.add("fa-times", "color-black")
}),
    window.addEventListener("click", function (e) {
        e.target.contains(menuToggle) ||
            menuHeader.classList.remove(expandClass);
    });
