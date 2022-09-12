let board = document.querySelectorAll(".board button");
let isActive = false;
let counter = 0;

const winner = '012-345-678-036-147-258-048-246' 
let winner2 = '012-345-678-036-147-258-048-246' 


console.log(winner2);

document.getElementById('reset').addEventListener('click', (event) => {
  event.preventDefault();
  reset();
})

for (let i = 0; i < board.length; i++) {
  board[i].addEventListener('click', (event) => {
    event.preventDefault();
    
    let jugadorActual = actualPlayer();
    if(jugadorActual == 1){  
      movement(i,jugadorActual,'X')
    } else if(jugadorActual == 2) { 
        movement(i,jugadorActual,'O')
    } else {
        console.log('No funcionó');
    }
  
    counter += 1;
    
  })
}

function movement(i,jugadorActual,marca){
  board[i].innerText = marca;
  board[i].disabled = true;
  board[i].style.color = 'white';
  winner2 = winner2.replaceAll(i+'',marca)
  if(winner2.indexOf(marca+marca+marca) > -1){
    console.log(jugadorActual+' wins!!!')
    disabledButtons(true);
  }
}

function disabledButtons(disabled){
  for (let i = 0; i < board.length; i++) {
    board[i].disabled = disabled;
  }
}

function actualPlayer ( )  {
  if ( counter%2 ==  0 ){
    return 1;
  }else {
    return 2;
  }
}

function reset(){
  for (let i = 0; i < board.length; i++) {
    board[i].innerText = '';
    board[i].disabled = false;
  }
  winner2 = winner;
  counter = 0;
}

        

