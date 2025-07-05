class CaroGame {
    constructor(size) {
        this.size = size;
        this.board = Array.from({ length: size }, () => Array(size).fill(null));
        this.currentPlayer = "X";
        this.gameOver = false;
        this.renderBoard();
    }

    renderBoard() {
        const boardElement = document.getElementById("board");
        boardElement.innerHTML = "";
        this.board.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                const cellElement = document.createElement("div");
                cellElement.classList.add("cell");
                cellElement.dataset.row = rowIndex;
                cellElement.dataset.col = colIndex;
                cellElement.textContent = cell || "";
                if (cell) cellElement.classList.add("taken");
                cellElement.addEventListener("click", () => this.makeMove(rowIndex, colIndex));
                boardElement.appendChild(cellElement);
            });
        });
    }

    makeMove(row, col) {
        if (this.board[row][col] || this.gameOver) return;
        this.board[row][col] = this.currentPlayer;
        this.renderBoard();
        if (this.checkWin(row, col)) {
            document.getElementById("status").textContent = `Người chơi ${this.currentPlayer} thắng!`;
            this.gameOver = true;
        } else {
            this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
            document.getElementById("status").textContent = `Lượt: ${this.currentPlayer}`;
        }
    }

    checkWin(row, col) {
        const directions = [
            [0, 1], [1, 0], [1, 1], [1, -1]
        ];
        for (let [dx, dy] of directions) {
            if (this.countInDirection(row, col, dx, dy) + this.countInDirection(row, col, -dx, -dy) >= 4) {
                return true;
            }
        }
        return false;
    }

    countInDirection(row, col, dx, dy) {
        let count = 0;
        let r = row + dx, c = col + dy;
        while (this.isValid(r, c) && this.board[r][c] === this.currentPlayer) {
            count++;
            r += dx;
            c += dy;
        }
        return count;
    }

    isValid(row, col) {
        return row >= 0 && col >= 0 && row < this.size && col < this.size;
    }
}

new CaroGame(20);