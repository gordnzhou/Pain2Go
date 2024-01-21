updateElement();

function updateElement() {
    console.log("dkfdj");
    const updateElement = document.getElementById('score_display');
    const score = localStorage.getItem("verycoolscore") || 0;
    updateElement.textContent = `SCORE: ${score}`;
}