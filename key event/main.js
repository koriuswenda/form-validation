// event listener = listener for spesific event to create



const myBox    = document.getElementById("myBox");

document.addEventListener('keydown', function (event ) {
    console.log (`key down = ${event.key}`);

    myBox.textContent = "😆"
});

document.addEventListener('key up ', function (event ) {
    console.log (`key up = ${event.key}`);
});
