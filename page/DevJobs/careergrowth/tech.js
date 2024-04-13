// playlist cards

function arrayChange() {
    a = TechObj[0]
    for (i = 0, j = 1; j < TechObj.length; i++, j++) {
        TechObj[i] = TechObj[j];
    }
    TechObj[TechObj.length - 1] = a;

}

setInterval(arrayChange, 5000)

function showTech() {
    let html = "";
    TechObj.forEach((element, index) => {
        // console.log(element.courseLink);
        html += ` <article class="techcard">
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
    let notesElm = document.getElementById("techcards");
    if (TechObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }

}
showTech()

setInterval(showTech, 5000)
