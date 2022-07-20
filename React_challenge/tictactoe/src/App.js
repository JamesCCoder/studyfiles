import React, { useState, useEffect } from "react";
import "./App.css";

import Square from "./Component/Square";
import { Patterns } from "./Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkIfTie();
    checkWin();
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game finished! Winning player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const chooseSquare = (num) => {
    setBoard(
      board.map((val, i) => {
        if (val === "" && i === num) {
          return player;
        }
        return val;
      }),
    );
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: "won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
  };

  return (
    <div className="App">
      <div className="board">
        {board.map((one, i) => {
          return (
            <Square key={i} value={one} chooseSquare={() => chooseSquare(i)} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
