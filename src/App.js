import { useState } from "react";



function App() {

  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [char, setChar] = useState('X')
  const [winner, setWinner] = useState('')
  const [count, setCount] = useState(1)


  const handleClick = (r, c) => {
    if(matrix[r][c]) return;
    const tmpMatrix = [...matrix];
    tmpMatrix[r][c] = char;
    setMatrix(tmpMatrix)
    setChar(char === 'X' ? 'O' : 'X')
    setCount(count+1)
    checkWinner();
    }

    const checkWinner = () => {
      if (matrix[0][0] && matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2]) {
        setWinner(matrix[0][0] + " is the winner")
      }
      if (matrix[1][0] && matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2]) {
        setWinner(matrix[1][0] + " is the winner")
      }
      if (matrix[2][0] && matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2]) {
        setWinner(matrix[2][0] + " is the winner")
      }
      if (matrix[0][0] && matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0]) {
        setWinner(matrix[0][0] + " is the winner")
      }
      if (matrix[0][1] && matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1]) {
        setWinner(matrix[0][0] + " is the winner")
      }
      if (matrix[0][2] && matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2]) {
        setWinner(matrix[0][2] + " is the winner")
      }
      if (matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
        setWinner(matrix[0][0] + " is the winner")
      }
      if (matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
        setWinner(matrix[0][2] + " is the winner")
      }
      if(count===9)
      {
        setWinner("Match Drawn")
      }
      
    }



return (

  <div className="App ">
    <div className="header alignCenter">Tic Tae Toe</div>
    <div className="alignCenter board">
      {!winner && <p>{char} turn now</p>}
      <div className="game-board">
        {
          winner ||
          matrix.map((row, rIndex) => (
            <div className="row">
              {
                row.map((cell, cIndex) => (
                  <div
                    onClick={() => handleClick(rIndex, cIndex)}
                    className="cell alignCenter" >
                    {
                      matrix[rIndex][cIndex]
                    }
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
      <button onClick={() => {
        setMatrix(
          [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
          ]
        );
        setWinner('')
      }}>Reset</button>
    </div>
  </div>
  );
}

export default App;
