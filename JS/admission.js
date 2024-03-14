// console.log("Vishal ")

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }
}

const admissionBoxs = document.querySelector(".onScroll");
// console.log(admissionBox)

function checkSlide(e) {
    // console.log(e);
    const slideInAt = (window.scrollY + window.innerHeight) - admissionBoxs.clientHeight / 3;
    // console.log(admissionBoxs.clientHeight)
    const boxBottom = admissionBoxs.offsetTop + admissionBoxs.clientHeight;
    const isHalfshown = slideInAt > admissionBoxs.offsetTop;
    const isNotScrolledPast = window.screenY < boxBottom;

    if (isHalfshown && isNotScrolledPast) {
        admissionBoxs.classList.add('admission_box_active');
    } else {
        admissionBoxs.classList.remove('admission_box_active');
    }

    // console.log(boxBottom)

}

window.addEventListener('scroll', debounce(checkSlide))