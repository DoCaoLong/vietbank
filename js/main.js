const menuHeader = document.querySelector(".header-mobile");
const menuToggle = document.querySelector(".header-mobile_btn");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function (e) {
    console.log("e.target", e.target);
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
