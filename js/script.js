let board = document.querySelectorAll(".board button");
let isActive = false;
let turnCounter = 1;
let playerTurn = 0;
const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


console.log(winner);

for (let i = 0; i < board.length; i++) {
  board[i].addEventListener('click', (event) => {
    event.preventDefault();
    
    console.log(`Boton: ${board[i].id}`);
    
    let jugadorActual = actualPlayer();
    if(jugadorActual == 1){  
        board[i].innerText = 'X';
        board[i].disabled = true;
        console.log(winner[0]);
    } else if(jugadorActual == 2) { 
        board[i].innerText = 'O';
        board[i].disabled = true;
    } else {
        console.log('No funcionó');
    }
    console.log(playerTurn);
    mensaje = `Click en el boton: ${i}`
    console.log(mensaje);
    counter += 1;
    console.log(counter);
    
  })
}

function actualPlayer ( )  {
  if ( turnCounter%2 !=  0 ){
    playerTurn = 1;
  }else {
    playerTurn = 2;
  }
  turnCounter += 1;

  return playerTurn;
}

let winerCheck = () => {
  let 
//
  const win = winner[i];
  const a = board[win[0]];
  const b = board[win[1]];
  const c = board[win[2]];
}
//a ===
        

