const Toggle = document.querySelector(".btn");
const Sm = document.querySelector(".sm");

Toggle.addEventListener("click", function () {
    Sm.classList.add("d-block ");
    Sm.classList.add("d-sm-none ");
    console.log(Sm)
});
console.log(Sm)