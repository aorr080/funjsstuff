var positionRows = document.querySelectorAll('.positionRow');

for (let i = 0; i < positionRows.length; i++) {
    positionRows[i].onclick = playerSelect;
}


function playerSelect(e) {
    if (e.target.matches('.oneArea')) {
        e.target.closest('.positionRow').classList.toggle('firstplayer');
        e.target.closest('.positionRow').classList.remove('secondplayer');
        e.target.closest('.positionRow').classList.remove('thirdplayer');
    } else if (e.target.matches('.twoArea')) {
        e.target.closest('.positionRow').classList.remove('firstplayer');
        e.target.closest('.positionRow').classList.toggle('secondplayer');
        e.target.closest('.positionRow').classList.remove('thirdplayer');
    } else if (e.target.matches('.threeArea')) {
        e.target.closest('.positionRow').classList.remove('firstplayer');
        e.target.closest('.positionRow').classList.remove('secondplayer');
        e.target.closest('.positionRow').classList.toggle('thirdplayer');
    }
}
