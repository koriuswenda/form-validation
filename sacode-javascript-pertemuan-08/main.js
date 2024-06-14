const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");



myButton.addEventListener("click", Event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 😣"
});

myButton.addEventListener("mouseover", Event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "don't do it 😱"
});


myButton.addEventListener("mouseout", Event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "click me 😁"
});



