const synth = window.speechSynthesis;

const navSelect = document.querySelector("nav a");
const voiceSelect = document.querySelector("select");

const voices = synth.getVoices();

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(e => 
        e.addEventListener('click', _ => toSpeech(e.dataset.level))
    );
});

function toSpeech(level) {
    if (level='easy') {
        const inputTxt = document.querySelector(`#easyDiv .instruction li`);
        console.log
    } else if (level = 'mid') {
        const inputTxt = document.querySelector(`#midDiv .instruction li`);
    } else if (level = 'hard') {
        const inputTxt = document.querySelector(`#hardDiv .instruction li`);
    } else {
        //
    }

    const inputTxt = document.querySelector(`#${level}Div #instruction li`);
    console.log(inputTxt)
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
        }
    }
    synth.speak(utterThis);
    inputTxt.blur();
}