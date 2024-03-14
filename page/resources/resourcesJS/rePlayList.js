// playlist cards
function showPlay() {
    let html = "";
    PlayObj.forEach((element, index) => {
        // console.log(element.courseLink);
        html += ` <article class="playcard">
                    <div class="card__img">
                        <img src="${element.IMG}"
                            alt="">
                    </div>
                    <div class="card__info">
                        <span class="card__category">${element.channel}</span>
                        <h3 class="card__title">${element.courseName}</h3>
                        <span class="card__by"><a href="${element.courseLink}" target="_blank" class="card__author"
                                title="author">Click</a></span>
                    </div>
                </article>`;
    });
    let notesElm = document.getElementById("playcards");
    if (PlayObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }

}
showPlay()
