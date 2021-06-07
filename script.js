let navPanel = document.body.querySelector("header nav");
let navButton = document.body.querySelector("header button");
let backgroundText = document.body.querySelector("header h1");
let figure = document.body.querySelectorAll("header figure");

let navVisible = false;

navButton.addEventListener('click', () => {
    if (navVisible) {
        backgroundText.style.zIndex = "-1";
        navPanel.style.animation = "close 0.1s forwards";
        for (let i = 0; i < figure.length; i++) {
            figure[i].style.backgroundColor = "#ff3399";
        }
        navVisible = false;
    } else {
        backgroundText.style.zIndex = "2";
        navPanel.style.animation = "open 0.1s forwards";
        for (let i = 0; i < figure.length; i++) {
            figure[i].style.backgroundColor = "white";
        }
        navVisible = true;
    }
});