var playerNameInput = document.querySelector('#playerNameInput')
const startQuizBtn = document.querySelector('#startQuizBtn');

startQuizBtn.addEventListener('click', function() {

    // Get the name and set it to localStorage for late use
    var setPlayerName = playerNameInput.value;
    localStorage.setItem('playerName', setPlayerName);
    
  });
  
