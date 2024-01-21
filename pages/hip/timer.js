document.addEventListener('DOMContentLoaded', function() {
    const showTimer = document.getElementById('timer');
    const hiddenTimer = document.getElementById('hidden-div');
  
    showTimer.addEventListener('click', function() {
      if(hiddenTimer.style.display='none'){
        hiddenTimer.style.display = 'block'; k 
      } else if (hiddenTimer.style.display = 'block') {
        hiddenTimer.style.display = 'none';
      }
    });
});
  