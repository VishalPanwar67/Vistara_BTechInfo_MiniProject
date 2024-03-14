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

let searchText = document.getElementById("re_search");
// console.log(searchText); 
searchText.addEventListener("input", () => {
    // console.log(searchText.value);
    let inpVal = searchText.value;

    inpVal = inpVal.toUpperCase();

    console.log(inpVal);

    let allCards = document.getElementsByClassName("card");
    // console.log(allCards);
    Array.from(allCards).forEach((element) => {
        let courseName = element.getElementsByTagName("h3")[0].innerText;
        let platform = element.getElementsByTagName("span")[0].innerText;

        if (courseName.includes(inpVal)) {
            element.style.display = "block";
        } else if (platform.includes(inpVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })

})
// showNotes()