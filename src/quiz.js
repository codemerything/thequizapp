const insertPlayerName = document.querySelector('#insertPlayerName');

// Get the player's name from localStorage
const getPlayerName = localStorage.getItem('playerName');
insertPlayerName.textContent = getPlayerName;