const sMin = 1; // starting minute
let time = sMin * 60;

const countDown = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDown.innerHTML = minutes+':'+seconds;
    if (countDown.innerHTML == '0:00') {
        window.location.href= nextPage();
        console.log(window.location.href);
    } else {
        time--;    
    }

}