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
        let g = this.grid, s = symbol;
        return ((g[0][0] == s && g[0][1] == s && g[0][2] == s) ||
                (g[1][0] == s && g[1][1] == s && g[1][2] == s) ||
                (g[2][0] == s && g[2][1] == s && g[2][2] == s) ||
                (g[0][0] == s && g[1][1] == s && g[2][2] == s) ||
                (g[0][2] == s && g[1][1] == s && g[2][0] == s));
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
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
                if (this.grid[i][j])
                    return false;
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.grid[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
