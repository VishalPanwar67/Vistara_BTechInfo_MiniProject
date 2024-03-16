
let getMood = localStorage.getItem("mode");
// console.log(getMood)

const body = document.querySelector("body");

if (getMood === "dark-mode") {
    body.classList.add("dark");
}

const moodToggle = document.querySelector(".darkLight-searchBox")

moodToggle.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark-mode");
    } else {
        localStorage.removeItem("mode");
    }
});


// console.log(moodToggle);






