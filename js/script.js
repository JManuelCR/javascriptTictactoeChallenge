let board = document.querySelectorAll(".board button");
let isActive = false;
let counter = 1;

for (let i = 0; i < board.length; i++) {
  const buttons = board[i].addEventListener('click', (event) => {
    mensaje = `Click en el boton: ${i}`
    console.log(mensaje);
  })
}

let actualPlayer = ( counter ) => {
    if ( counter%2 !=  0 ){
      actualPlayer = 1;
    }else {
      actualPlayer = 2;
    }
    counter += 1;
    return;
}


// for (let i = 0; i < board.length; i++) {
//   const element = board[i].addEventListener("click", (e) => {
//     e.preventDefault();
//     e.target;
//     console.log(element);
//   });
// }

// let circle = 1;
// let square = 2;

// let positions = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// let btn1 = positions[0];
// let btn2 = positions[1];
// let btn3 = positions[2];
// let btn4 = positions[3];
// let btn5 = positions[4];
// let btn6 = positions[5];
// let btn7 = positions[6];
// let btn8 = positions[7];
// let btn9 = positions[8];


// btn1.addEventListener('')

// let referi = false;

// let primerJugada = true;

// let ganador = 0;

// // function disabledButton(e) {
// //     isClick = false;

// //     if(e.target === isClick){
// //         ///
// //     } else if(isClick = true){
// //         button.disabled
// //     }

// // }

// // function isFanador(){
// //     contadorCirculor= 0
// //     (contadorCirculor == 3){
// //         ya ganos
// //     }
// // }

// // const buttons = document.querySelectorAll('button');
// // buttons.forEach(button => button.addEventListener('click', event => console.log(event)));
