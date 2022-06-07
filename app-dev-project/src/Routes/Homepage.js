import React from "react";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();
  // if (!user) {
  //   return history.push("/login");
  // } else {
  return (
    <div className="container">
      <div className="gameContainer">
        <div className="game">
          <div>Game room name</div>
          <div>Players:</div>
          <div>Player 1</div>
          <div>Player 2</div>
          <div>Player 3</div>
          <button>Join</button>
        </div>

        <div className="game">
          <div>Game room name</div>
          <div>Players:</div>
          <div>Player 1</div>
          <div>Player 2</div>
          <div>Player 3</div>
          <button>Join</button>
        </div>

        <div className="game">
          <div>Game room name</div>
          <div>Players:</div>
          <div>Player 1</div>
          <div>Player 2</div>
          <div>Player 3</div>
          <button>Join</button>
        </div>

        <div className="game">
          <div>Game room name</div>
          <div>Players:</div>
          <div>Player 1</div>
          <div>Player 2</div>
          <div>Player 3</div>
          <button>Join</button>
        </div>

        <div className="game">
          <div>Game room name</div>
          <div>Players:</div>
          <div>Player 1</div>
          <div>Player 2</div>
          <div>Player 3</div>
          <button>Join</button>
        </div>
      </div>
    </div>
  )
}

export default Homepage;