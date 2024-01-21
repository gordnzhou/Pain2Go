document.addEventListener('DOMContentLoaded', function() {
    const showTimer = document.getElementById('timer');
    
    // when the button with play icon is clicked, it will show the timer
    showTimer.addEventListener('click', function() {
        showTimer();
    });
});

// The function shows the hidden div
function showTimer() {
    const getTimer = document.getElementById('hidden_timer');
    
    if (getTimer.style.display('none')) {
        getTimer.style.display = 'block';
        startTimer();
    } else {
        getTimer.style.display = 'none';
    }
}

// The function that will start the timer
function startTimer() {
    
}