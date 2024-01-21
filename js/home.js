var bodyPartIds = ["neck"];

bodyPartIds.forEach((partId) => {
    var bodyPart = document.getElementById(partId);
    bodyPart.style.opacity = 0;

    bodyPart.addEventListener("mouseover", function(){
            bodyPart.style.opacity = 1;
    });
    bodyPart.addEventListener("mouseout", function(){
            bodyPart.style.opacity = 0;
    });
});