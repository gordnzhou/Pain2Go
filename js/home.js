console.log("hello world!");

var neck = document.getElementById("neck");
var neckButton = document.getElementById("neckButton");
neck.style.opacity = 0;

neck.addEventListener("mouseover", function(){
        neck.style.opacity = 1;
});
neck.addEventListener("mouseout", function(){
        neck.style.opacity = 0;
});