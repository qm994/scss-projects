const boxes = Array.from(document.getElementsByClassName('box'));
let playText = document.getElementById("playText");
const restartBtn = document.getElementById('restartBtn');
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = O_TEXT; 
let spaces = [null, null, null, null, null, null, null, null, null];

const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if (index < 3) {
            styleString += `border-bottom: 3px solid var(--purple);`;
        }

        if (index % 3 === 0) {
            styleString += `border-right: 3px solid var(--purple);`;
        }

        if (index % 3 === 2) {
            styleString += `border-left: 3px solid var(--purple);`;
        }

        if (index > 2) {
            styleString += `border-top: 3px solid var(--purple);`;
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked);
    });
};

const boxClicked = (e) => {
    console.log('box clicked');
    console.log(e.target);
    const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if(playerHasWon()) {
            playText.innerText = `${currentPlayer} has won!`;
            return 
        }
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
};

const playerHasWon = () => {
    if(spaces[0] === currentPlayer) {
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(`${currentPlayer} wins up top`)
            return true;
        }
        else if(spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} wins left col`)
            return true;
        }
        else if(spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(`${currentPlayer} wins diagonaly`)
            return true;
        }
    }

    if(spaces[8] === currentPlayer) {
        if(spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            
            return true;
        }
        else if(spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
            
            return true;
        }
    }

    if(spaces[4] === currentPlayer) {
        if(spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            
            return true;
        }
        else if(spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            
            return true;
        }
    }
};

restartBtn.addEventListener('click', () => {
    spaces.forEach((space, idx) => {
        spaces[idx] = null;
    });

    boxes.forEach(box => {
        box.innerText = '';
    });

    playText.innerText = `Let's play again!`
    currentPlayer = O_TEXT;
})


drawBoard();


