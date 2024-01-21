function etoSpeech() {
    // get all the instructions in easyDiv
    const getText = document.querySelector('.instruction-header');

    // webAPI > SpeechSynthesisUtterance
    function toSpeech() {
        const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
        utterThis.voice = voices[voiceSelect.value];
    }

    utterance = new SpeechSynthesisUtterance(getText.textContent);

    toSpeech();
}