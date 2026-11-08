/*--------------------------- Constants --------------------------------*/



/*------------------------- Variables (state) ----------------------------*/
let currentPlayer = 'X'
let isGameOver = false



/*----------------------- Cached Element References ------------------------*/
const messageEl = document.querySelector('#message')
const sqr0El = document.getElementById('0')
const sqr1El = document.getElementById('1')
const sqr2El = document.getElementById('2')
const sqr3El = document.getElementById('3')
const sqr4El = document.getElementById('4')
const sqr5El = document.getElementById('5')
const sqr6El = document.getElementById('6')
const sqr7El = document.getElementById('7')
const sqr8El = document.getElementById('8')
// const squaresEl = document.querySelectorAll('.sqr')
// console.log(sqr0El, sqr1El, sqr2El, sqr3El, sqr4El, sqr5El, sqr6El, sqr7El, sqr8El)

/*----------------------- Functions --------------------------------*/
 messageEl.textContent = `It's ${currentPlayer}'s turn`
// // change current player 
if(currentPlayer === 'X'){
    currentPlayer = 'O'

}else{
currentPlayer = 'X'
}

// const handleClick = (event) => {
//     if(currentPlayer === 'X'){
//         // Check event.target.id
//         // Change the textContent of the specific box with that id
//         // Switch player to 'O'
//     } else if (currentPlayer === 'O') {
//         // Check event.target.id
//         // Change the textContent of the specific box with that id
//         // Switch player to 'X'
//     }
// }

/*---------------------- Event Listeners -----------------------------*/
// squaresEl.addEventListner('click'. handleClick)
sqr0El.addEventListener('click', ()=>{
    if (sqr0El.textContent !== '' || isGameOver === true){
        return
    }else{
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`        
    }

    sqr0El.textContent = currentPlayer
    
    
})
sqr1El.addEventListener('click', ()=>{
    if (sqr1El.textContent !== '' || isGameOver === true){
        return
    }else{
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`        
    }

    sqr1El.textContent = currentPlayer
})
sqr2El.addEventListener('click', ()=>{
    if (sqr2El.textContent !== '' || isGameOver === true){
        return
    }else{
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`        
    }

    sqr2El.textContent = currentPlayer
})
sqr3El.addEventListener('click', ()=>{
    if (sqr3El.textContent !== '' || isGameOver === true){
        return
    }else{
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`        
    }

    sqr3El.textContent = currentPlayer
})
sqr4El.addEventListener('click', ()=>{
    if (sqr4El.textContent !== '' || isGameOver === true){
        return
    }else{
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`        
    }

    sqr4El.textContent = currentPlayer
})
sqr5El.addEventListener('click', ()=>{
    if (sqr5El.textContent !== '' || isGameOver === true){
        return
    }else{
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`        
    }

    sqr5El.textContent = currentPlayer
})
sqr6El.addEventListener('click', ()=>{
    if (sqr6El.textContent !== '' || isGameOver === true){
        return
    }else{
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`        
    }

    sqr6El.textContent = currentPlayer
})
sqr7El.addEventListener('click', ()=>{
    if (sqr7El.textContent !== '' || isGameOver === true){
        return
    }else{
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`        
    }

    sqr7El.textContent = currentPlayer
})
sqr8El.addEventListener('click', ()=>{
    if (sqr8El.textContent !== '' || isGameOver === true){
        return
    }else{
        if(currentPlayer === 'X'){
            currentPlayer = 'O'
        }else{
            currentPlayer = 'X'
        }
        messageEl.textContent = `It's ${currentPlayer}'s turn`        
    }

    sqr8El.textContent = currentPlayer
})



