import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Die from "./Die";

const Tenzies = () => {
  const [blocks, setBlocks] = useState(
    Array(10).fill({
      number: "",
      frozen: false,
    })
  );
  const [hasWon, setHasWon] = useState(false);
  const [rolls, setRolls] = useState(0);
  const [highscore, setHighscore] = useState(
    JSON.parse(localStorage.getItem("dice-highscore")) || 0
  );

  const toggleFrozen = (index) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block, i) =>
        i === index ? { ...block, frozen: !block.frozen } : block
      )
    );
  };

  const handleRoll = () => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.frozen
          ? block
          : { ...block, number: Math.ceil(Math.random(1) * 6) }
      )
    );
    setRolls((prevRolls) => prevRolls + 1);
  };

  const resetGame = () => {
    populateBlocks();
    setHasWon(false);
    setHighscore((prevHighscore) =>
      prevHighscore > rolls || prevHighscore === 0 ? rolls : prevHighscore
    );
    saveHighscore();
    setRolls(0);
  };

  const populateBlocks = () => {
    setBlocks((prevBlocks) =>
      prevBlocks.map(() => ({
        number: Math.ceil(Math.random(1) * 6),
        frozen: false,
      }))
    );
  };

  const saveHighscore = () => {
    localStorage.setItem("dice-highscore", JSON.stringify(highscore));
  };

  useEffect(() => {
    populateBlocks();
  }, []);

  useEffect(() => {
    if (blocks[0].number === "") return;
    if (new Set(blocks.map((block) => block.number)).size === 1) {
      if (blocks.every((block) => block.frozen)) {
        setHasWon(true);
        console.log("You Win");
      }
    }
  }, [blocks]);

  return (
    <div className="main--container">
      {hasWon && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <h1 className="main--title">Tenzies</h1>
      <p className="main--p">
        Roll until all dice are the same. Click each die to freeze it as its
        currents value between rolls.
      </p>
      <div className="score--container">
        <div className="highscore">Highscore: {highscore}</div>
        <div className="score">Score: {rolls}</div>
      </div>
      <div className="blocks--container">
        {blocks.map((block, index) => (
          <div
            className={block.frozen ? "block frozen" : "block unfrozen"}
            onClick={hasWon ? null : () => toggleFrozen(index)}
          >
            {/* {block.number} */}
            <Die number={block.number} />
          </div>
        ))}
      </div>
      <button className="roll--btn" onClick={hasWon ? resetGame : handleRoll}>
        {hasWon ? "Play Again" : "Roll"}
      </button>
    </div>
  );
};

export default Tenzies;
