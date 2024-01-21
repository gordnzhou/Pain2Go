document.addEventListener('DOMContentLoaded', function() {
    const showTimer = document.getElementById('timer');
    const hiddenTimer = document.getElementById('hidden-div');
  
    showTimer.addEventListener('click', function() {
      if(hiddenTimer.style.display='none'){
        hiddenTimer.style.display = 'block';
      } else if (hiddenTimer.style.display = 'block') {
        hiddenTimer.style.display = 'none';
      }
    });

    const easyTab = document.getElementById('easy_tab');
    easyTab.addEventListener('click', function() {
      console.log("show");
    })

    const midTab = document.getElementById('mid_tab');
    easyTab.addEventListener('click', function() {
      console.log("show");
    })

    const hardTab = document.getElementById('hard_tab');
    easyTab.addEventListener('click', function() {
      console.log("show");
    })
});

/*

function switchTab(tabContent) {
    const tabs = document.querySelectorAll('.navbar_li')
    const tabContent = document.querySelectorAll('.content')

    tabContent.forEach(content => content.classList.remove('active'));

    tabs.forEach(tab => tab.classList.remove('active'));

    const clickedTab = document.getElementById(`tab${tabContent.slice(-1)}`);
    clickedTab.classList.add('active');

    const selectedContent = document.getElementById(tableId);
    selectedContent.classList.add('active');
}
*/

