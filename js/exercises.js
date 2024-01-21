function getNext() {
    var selected = document.querySelector('input[name="exercise"]:checked');
    
    if (selected.value == 'hip') {
        window.location.href = "hip\\hip-easy.html";
    } else if (selected.value == 'knee') {
        window.location.href = "knee\\knee-easy.html";
    } else if (selected.value == 'lower-back') {
        window.location.href = "lower-back\\lower-back-easy.html";
    } else if (selected.value == 'neck') {
        window.location.href = "neck\\neck-easy.html";
    } else if (selected.value == 'shoulder') {
        window.location.href = "shoulder\\shoulder-easy.html";
    }
}