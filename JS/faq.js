function toggleAnswer(element) {
    let answer = element.nextElementSibling;
    let toggle = element.querySelector('#plush');
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        toggle.classList.remove('fa-plus');
        toggle.classList.add('fa-minus');
    } else {
        answer.style.display = 'none';
        toggle.classList.remove('fa-minus');
        toggle.classList.add('fa-plus');
    }
}