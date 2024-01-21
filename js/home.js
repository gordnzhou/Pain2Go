var bodyPartIds = ["neckF","deltsF","hipF","kneesF","neckB","lowerBack","hipB","kneesB"];

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