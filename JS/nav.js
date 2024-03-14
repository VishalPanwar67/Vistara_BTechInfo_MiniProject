
let getMood = localStorage.getItem("mood");

const body = document.querySelector("body");

if (getMood && getMood === "dark-mode") {
    body.classList.add("dark");
}

const moodToggle = document.querySelector(".darkLight-searchBox")

moodToggle.addEventListener("click", () => {
    // moodToggle.classList.toggle("active");
    body.classList.toggle("dark");
})


// console.log(moodToggle);






