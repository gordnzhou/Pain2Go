document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(e => 
        e.addEventListener('click', _ => changeLevel(e.dataset.level))
    );

    function changeLevel(level) {
        let divs = document.querySelectorAll('.level-div');
        divs.forEach(div => div.classList.remove('active'));

        let targetDiv = document.getElementById(`${level}Div`);
        targetDiv.classList.add('active');
    }
});