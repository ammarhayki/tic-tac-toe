// /--------------------------------Constants --------------------------------/



// /----------------------------Variables (state) ----------------------------/
let currentPlayer = 'X'
let isGameOver = false
let moveCount = 0
let board = ['', '', '', '', '', '', '', '', '']

// /------------------------ Cached Element References ------------------------/
const messageEl = document.querySelector("#message")
const squares = document.querySelectorAll('.sqr')
// const sqr0El = document.getElementById('0')
// const sqr1El = document.getElementById('1')
// const sqr2El = document.getElementById('2')
// const sqr3El = document.getElementById('3')
// const sqr4El = document.getElementById('4')
// const sqr5El = document.getElementById('5')
// const sqr6El = document.getElementById('6')
// const sqr7El = document.getElementById('7')
// const sqr8El = document.getElementById('8')

const resetBtnEl = document.querySelector('#reset')

// /-------------------------------- Functions --------------------------------/
// messageEl.textContent = `Its ${currentPlayer} turn `

const handleClick = (event) => {
    const i = event.target.id
    if (board[i] !== '' || isGameOver === true) { return }
    board[i] = currentPlayer
    moveCount++

    render();
    winCombo();
    gameOver();



}
const render = () => {
    board.forEach((value, index) => {
        squares[index].textContent = value

    }


    )

}

const winCombo = (i) => {
    if (board[i] !== '' &&
        board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer ||
        board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer ||
        board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer ||
        board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer ||
        board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer ||
        board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer ||
        board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer ||
        board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer
    ) {
        messageEl.textContent = `${currentPlayer} is winner`
        isGameOver = true
        return
    }
}
const gameOver = () => {
    if (moveCount === 9) {
        isGameOver = true
        messageEl.textContent = ' it is a Tie'
        return
    }
    if (isGameOver === false) {

        changeTurn();
    }
}
const changeTurn = () => {
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }
    messageEl.textContent = `its ${currentPlayer} turn`
}

// /----------------------------- Event Listeners -----------------------------/
squares.forEach((square) => {
    square.addEventListener('click', handleClick)
})
resetBtnEl.addEventListener('click', ()=>{
    currentPlayer = 'X'
    isGameOver = false
    moveCount = 0
    board = ['', '', '', '', '', '', '', '', '']

    render()
    messageEl.textContent = `its ${currentPlayer} turn`

})
messageEl.textContent = `its ${currentPlayer} turn`