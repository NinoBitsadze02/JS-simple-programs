const button = document.getElementById("colorBtn");
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function changeColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById("colorCode").textContent = newColor;
}

button.addEventListener("click", changeColor);

const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    document.getElementById("colorCode").textContent = "White";
});