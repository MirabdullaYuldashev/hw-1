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
    Задание 1
*/

const blockMini = document.querySelector('.blockMini');

let positionX = 0;
let positionY = 0;
const move = () => {
    if (positionX <= 440 && positionY == 0) {
        positionX += 10;
        blockMini.style.left = `${positionX}px`;
        setTimeout(() => {
            move();
        }, 50)
    } else if (positionX >= 440 && positionY < 450) {
        positionY += 10;
        blockMini.style.top = `${positionY}px`;
        setTimeout(() => {
            move();
        }, 50)
    } else if (positionY >= 450 && positionX >= 0) {
        positionX -= 10;
        blockMini.style.left = `${positionX}px`;
        setTimeout(() => {
            move();
        }, 50)
    } else if (positionX <= 440 && positionY >= 0) {
        positionY -= 10;
        blockMini.style.top = `${positionY}px`;
        setTimeout(() => {
            move();
        }, 50)
    };
};
move();

/* 
    Задание 2
*/

i = 0;
const timer = setInterval(() => {
    console.log(i++)
}, 1000); 
setTimeout(() => {
    clearInterval(timer); // через пять секунд ф-я остановится выводится
}, 60000);
