const button1=document.getElementById("btn");
const bgdiv=document.getElementById("maindiv");
const color=["red", "green", "blue", "white", "black", "purple", "pink", "yellow"];


button1.addEventListener("click", randomColor);

function randomColor(){
    const colorIndex=parseInt(Math.random() *color.length);
    bgdiv.style.backgroundColor=color[colorIndex];
}