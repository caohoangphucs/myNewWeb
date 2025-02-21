document.body.style.transition = "background-color 1s";

function changeColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
//fuck me all
setInterval(changeColor, 1000);