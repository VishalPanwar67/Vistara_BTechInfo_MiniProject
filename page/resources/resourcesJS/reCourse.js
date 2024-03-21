showNotes()
// Show Courses
function showNotes() {
    let html = "";
    notesobj.forEach((element, index) => {
        // console.log(element.courseLink);
        html += ` <article class="card">
            <div class="card__img">
                <img src="${element.IMG}"
                    alt="">
            </div>
            <div class="card__info">
                <span class="card__category"> ${element.platform}</span>
                <h3 class="card__title">${element.courseName}</h3>
                <span class="card__by"><a href="${element.courseLink}" target="_blank" class="card__author" title="author">Click</a></span>
            </div>
            </article>`;
    });
    let notesElm = document.getElementById("cards");
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }

}
showNotes()

//Search JS

// Get the search input element
let searchText = document.getElementById("re_search");

// Add an event listener for input changes
searchText.addEventListener("input", () => {
    // Get the current value of the search input
    let inpVal = searchText.value;

    // Convert the input value to uppercase for case-insensitive comparison
    inpVal = inpVal.toUpperCase();

    // Get all card elements
    let allCards = document.getElementsByClassName("card");

    // Loop through each card element
    
    Array.from(allCards).forEach((element) => {
        // Get the course name and platform elements within each card
        let courseName = element.getElementsByTagName("h3")[0].innerText;
        let platform = element.getElementsByTagName("span")[0].innerText;
        
        // Check if the course name or platform includes the input value
        if (courseName.includes(inpVal) || platform.includes(inpVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});
// showNotes()