class TicTacToe {
    constructor() {
        this.grid = [];
        for (let i = 0; i < 3; i++) {
            this.grid[i] = [];
            for (let j = 0; j < 3; j++)
                this.grid[i][j] = null;
        }
        this.currentPlayer = 'x';
    }

    checkWinOf(symbol) {
        const check = (el) => (el == symbol);
        let diagCnt = 0, oddDiagCnt = 0;
        for (let i = 0; i < 3; i++) {
            const column =  [this.grid[0][i], this.grid[1][i], this.grid[2][i]];
            if (this.grid[i].every(check) || column.every(check))
                return true;
            diagCnt += this.grid[i][i] == symbol;
            oddDiagCnt += this.grid[i][2 - i] == symbol;
        }
        return diagCnt == 3 || oddDiagCnt == 3;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.grid[rowIndex][columnIndex] !== null) 
            return;
        this.grid[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = (this.currentPlayer == 'x') ? 'o': 'x';
    }

    isFinished() {
        return this.getWinner() != null || this.isDraw(); 
    }

    getWinner() {
        if (this.checkWinOf('x'))
            return 'x';
        else if (this.checkWinOf("o"))
            return 'o';
        else
            return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                if (this.grid[i][j] === null)
                    return false;
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.grid[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
