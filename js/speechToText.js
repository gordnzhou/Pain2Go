// to be developed

const synth = window.speechSynthesis;

const navSelect = document.querySelector("nav a");
const voiceSelect = document.querySelector("select");

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(e => 
        e.addEventListener('click', _ => toSpeech(e.dataset.level))
    );
});

function toSpeech(level) {
    let inputTxt;
    if (level='easy') {
        inputTxt = document.querySelectorAll(`#easyDiv .instruction li`);

    } else if (level = 'mid') {
        inputTxt = document.querySelectorAll(`#midDiv .instruction li`);
    } else if (level = 'hard') {
        inputTxt = document.querySelectorAll(`#hardDiv .instruction li`);
    } else {
        //do nothing    
    }
    

    const utterThis = new SpeechSynthesisUtterance();
    for (let i = 0; i < inputTxt.length; i++) {
        utterThis.text += inputTxt[i].textContent + ' ';
    }

    

    synth.speak(utterThis);
    inputTxt[inputTxt.length - 1].blur();
}