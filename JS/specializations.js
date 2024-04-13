const speBoxChild1 = document.querySelector("#speBox_child1");
const speBoxChild2 = document.querySelector("#speBox_child2");
const speBoxChild3 = document.querySelector("#speBox_child3");
const speBoxChild4 = document.querySelector("#speBox_child4");
const spePera1 = document.querySelector("#spe_pera1");
const spePera2 = document.querySelector("#spe_pera2");
const spePera3 = document.querySelector("#spe_pera3");
const spePera4 = document.querySelector("#spe_pera4");


const speBtn1 = document.querySelector("#spe_btn1");
const speBtn2 = document.querySelector("#spe_btn2");
const speBtn3 = document.querySelector("#spe_btn3");
const speBtn4 = document.querySelector("#spe_btn4");

const btn = document.querySelector("#btn_close");

let headings = document.getElementsByClassName('spe_heading');


function speAniAdd1() {
    speBoxChild1.classList.add("spa_active1");
    spePera1.classList.add("spe_pera_active");
    speBtn1.classList.add("spe_btn_active");
    btn.style.visibility = 'visible';

    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = 'rgb(137, 207, 240)'; 
    }
    // console.log(e);
}
function speAniAdd2() {
    speBoxChild2.classList.add("spa_active2");
    spePera2.classList.add("spe_pera_active");
    speBtn2.classList.add("spe_btn_active");
    btn.style.visibility = 'visible';

    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = 'rgb(137, 207, 240)';
    }
    // console.log(e);
}
function speAniAdd3() {
    speBoxChild3.classList.add("spa_active3");
    spePera3.classList.add("spe_pera_active");
    speBtn3.classList.add("spe_btn_active");
    btn.style.visibility = 'visible';

    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = 'rgb(137, 207, 240)'; // This is the RGB value for Baby Blue
    }

}
function speAniAdd4() {
    speBoxChild4.classList.add("spa_active4");
    spePera4.classList.add("spe_pera_active");
    speBtn4.classList.add("spe_btn_active");
    btn.style.visibility = 'visible';

    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = 'rgb(137, 207, 240)'; // This is the RGB value for Baby Blue
    }

}

function speRemove() {
    console.log("Krishna")
    speBoxChild1.classList.remove('spa_active1');
    speBoxChild2.classList.remove('spa_active2');
    speBoxChild3.classList.remove('spa_active3');
    speBoxChild4.classList.remove('spa_active4');

    spePera1.classList.remove("spe_pera_active");
    speBtn1.classList.remove("spe_btn_active");

    spePera2.classList.remove("spe_pera_active");
    speBtn2.classList.remove("spe_btn_active");

    spePera3.classList.remove("spe_pera_active");
    speBtn3.classList.remove("spe_btn_active");

    spePera4.classList.remove("spe_pera_active");
    speBtn4.classList.remove("spe_btn_active");

    btn.style.visibility = 'hidden';

    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = 'rgb(40, 40, 255)'; // This is the RGB value for Baby Blue
    }


}
// setInterval(speRemove, 20000);