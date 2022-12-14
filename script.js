/*
    Задание 1
*/

const mailInput = document.querySelector('.mailInput');
const mailBtn = document.querySelector('.mailBtn');
const mailSpan = document.querySelector('.mailSpan');
const mailRegExp = /@/;

mailBtn.addEventListener('click', () => {
    if (mailRegExp.test(mailInput.value)) {
        mailSpan.innerText = 'Congrats! Message have sended';
        mailSpan.style.color = 'green';
    } else {
        mailSpan.innerText = 'Sorry, write correct mail';
        mailSpan.style.color = 'red';
    }
})

/*
    Задание 2
*/

const blockBig = document.querySelector('.blockBig');
const blockMini = document.querySelector('.blockMini');
const blockBtn = document.querySelector('.blockBtn');

const move = () => {
    blockMini.style.left = '50px';
    if () {
        move();
    }
};
move();

blockBtn.addEventListener('click', () => {
    blockMini.style.left = '450px';
})