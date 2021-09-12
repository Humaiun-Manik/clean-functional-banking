function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '15px';
    player.style.padding = '15px';
}
const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
}
function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New player</h4> 
    <p>Corrupti totam, autem maiores maxime asperiores possimus dolore reprehenderit eius, explicabo consequatur unde dignissimos excepturi! Possimus ducimus natus dolorum, quo cum error corrupti nihil tenetur,ipsam iusto aliquam vitae expedita!</p>
    `
    playersContainer.appendChild(player);
    setPlayerStyle(player);
}
document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    } else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})