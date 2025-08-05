import React, { useState, useEffect } from 'react';
import "../public/css/App.css";

const ROWS = 5;
const COLS = 5;
const MINES = 5;

const createBoard = () => {
  const board = Array(ROWS).fill().map(() =>
    Array(COLS).fill({ mine: false, revealed: false, count: 0 })
  );

  let placedMines = 0;
  while (placedMines < MINES) {
    const x = Math.floor(Math.random() * ROWS);
    const y = Math.floor(Math.random() * COLS);
    if (!board[x][y].mine) {
      board[x][y] = { ...board[x][y], mine: true };
      placedMines++;
    }
  }

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (!board[i][j].mine) {
        let count = 0;
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const ni = i + dx, nj = j + dy;
            if (ni >= 0 && ni < ROWS && nj >= 0 && nj < COLS && board[ni][nj].mine) {
              count++;
            }
          }
        }
        board[i][j] = { ...board[i][j], count };
      }
    }
  }

  return board;
};

function App() {
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [timer, setTimer] = useState(0);
  const [amount, setAmount] = useState('');
  const [hasPaid, setHasPaid] = useState(false);

  useEffect(() => {
    setBoard(createBoard());
  }, []);

  useEffect(() => {
    let interval = null;
    if (!gameOver && hasPaid) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameOver, hasPaid]);

  const revealCell = (x, y) => {
    if (gameOver || board[x][y].revealed) return;

    const newBoard = board.map(row => row.map(cell => ({ ...cell })));
    const cell = newBoard[x][y];
    cell.revealed = true;

    if (cell.mine) {
      setGameOver(true);
    } else {
      if (cell.count === 0) {
        revealEmptyCells(newBoard, x, y);
      }

      const unrevealed = newBoard.flat().filter(c => !c.revealed);
      if (unrevealed.length === MINES) {
        setWin(true);
        setGameOver(true);
      }
    }

    setBoard(newBoard);
  };

  const revealEmptyCells = (board, x, y) => {
    const queue = [[x, y]];
    const visited = new Set();

    while (queue.length) {
      const [cx, cy] = queue.pop();
      const key = `${cx}-${cy}`;
      if (visited.has(key)) continue;
      visited.add(key);

      const cell = board[cx][cy];
      cell.revealed = true;

      if (cell.count === 0) {
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const nx = cx + dx, ny = cy + dy;
            if (
              nx >= 0 && nx < ROWS && ny >= 0 && ny < COLS &&
              !board[nx][ny].revealed
            ) {
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  };

  const resetGame = () => {
    setBoard(createBoard());
    setGameOver(false);
    setWin(false);
    setTimer(0);
    setHasPaid(false);
    setAmount('');
  };

  return (
    <div className="game-container">
      <h1>💣 Mines</h1>
      {!hasPaid ? (
        <div className="payment-section">
          <h2>🎮 Select Your Game Amount</h2>
          <select value={amount} onChange={(e) => setAmount(e.target.value)}>
            <option value="">-- Choose Amount --</option>
            {[10, 50, 100, 500, 1000, 5000, 10000].map((amt) => (
              <option key={amt} value={amt}>₹{amt}</option>
            ))}
          </select>
          <button disabled={!amount} onClick={() => setHasPaid(true)}>
            ✅ Confirm & Start
          </button>
        </div>
      ) : (
        <>
          <p className="timer">⏱️ {timer}s</p>
          <div className="board">
            {board.map((row, i) => (
              <div key={i} className="row">
                {row.map((cell, j) => (
                  <div
                    key={j}
                    className={`cell ${cell.revealed ? 'revealed' : ''} ${cell.mine && cell.revealed ? 'mine' : ''}`}
                    onClick={() => revealCell(i, j)}
                  >
                    {cell.revealed && (cell.mine ? '💣' : (cell.count ? cell.count : '⭐'))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="controls">
            <button onClick={resetGame} className="restart">🔁 Restart</button>
            <button className="cashout" disabled={!win && !gameOver}>
              💰 {win ? `Cashout ₹${Number(amount) * 2}` : 'Cashout'}
            </button>
          </div>
          {gameOver && (
            <div className="message">{win ? '🎉 You Win!' : '💥 Game Over'}</div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
