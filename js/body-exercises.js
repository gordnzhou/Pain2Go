let MIN_WAIT_TIME = 5000;
let canClick = false;

setTimeout(() => {canClick = true;}, MIN_WAIT_TIME);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(e => 
        e.addEventListener('click', _ => changeLevel(e.dataset.level))
    );
});

function changeLevel(level) {
    let divs = document.querySelectorAll('.level-div');
    divs.forEach(div => div.classList.remove('active'));

    let targetDiv = document.getElementById(`${level}Div`);
    targetDiv.classList.add('active');
}

function tryNextLevel() {
    if (canClick) {
        nextLevel();
    }
}

function nextLevel() {
    let divs = document.querySelectorAll('.level-div');
    let current = null;
    divs.forEach((div) => 
        { if (div.classList.contains('active')) { current = div; }
    })
    
    if (current.id == "easyDiv") {
        addScore(10);
        changeLevel("mid");
    }
    else if (current.id == "midDiv") {
        addScore(12);
        changeLevel("hard");
    }
    else {
        addScore(14);
        window.location.href = '../../index.html';
    }

    canClick = false;
    setTimeout(() => {canClick = true}, MIN_WAIT_TIME);
}

function addScore(amountToAdd) {
    let keyName = "verycoolscore";

    let score = localStorage.getItem(keyName);
    localStorage.setItem(keyName, Number(score) + Number(amountToAdd));
}