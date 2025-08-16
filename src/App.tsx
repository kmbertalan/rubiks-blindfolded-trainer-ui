import React, { useEffect, useRef, useState } from "react";
import Scrambo from "scrambo";
import { edgeMoves, cornerMoves, parity } from "./constants";

function App() {
  const cubeRef = useRef<HTMLElement>(null);
  const [scramble, setScramble] = useState("");
  const [algorithm, setAlgorithm] = useState("");
  const scrambler = new Scrambo();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.cubing.net/v0/js/cubing/twisty";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (cubeRef.current && algorithm) {
      cubeRef.current.setAttribute("alg", algorithm);
    }
  }, [algorithm]);

  const handleScramble = () => {
    const userInput = prompt(
      "Enter your scramble, or leave empty to generate a new one:"
    );

    const finalScramble = userInput?.trim()
      ? userInput.trim()
      : scrambler.type("333").length(20).get()[0];

    setAlgorithm(finalScramble);
    setScramble(finalScramble);
  };

  const handleSolution = () => {
    if (!scramble) {
      alert("Please generate a scramble first!");
      return;
    }

    const edgeSolution = prompt("Enter your solution for the edges:") || "";
    const cornerSolution = prompt("Enter your solution for the corners:") || "";

    const convertedMoveList: string[] = [];

    edgeSolution.split("").forEach((letter) => {
      const moves = edgeMoves[letter.toUpperCase()];
      if (moves) convertedMoveList.push(moves);
    });
    if (convertedMoveList.length % 2 === 1) {
      convertedMoveList.push(parity);
    }

    cornerSolution.split("").forEach((letter) => {
      const moves = cornerMoves[letter.toUpperCase()];
      if (moves) convertedMoveList.push(moves);
    });

    if (convertedMoveList.length > 0) {
      const finalMove = convertedMoveList.filter((m) => m.length > 0).join(" ");
      setAlgorithm((prev) => `${prev} ${finalMove}`);
    } else {
      alert("No valid solution moves provided.");
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Cube Viewer</h1>
      <button onClick={handleScramble} style={{ marginBottom: "1rem" }}>
        Get Scramble
      </button>
      <button onClick={handleSolution} style={{ marginLeft: "1rem" }}>
        Solve Cube
      </button>

      {React.createElement("twisty-player", {
        ref: cubeRef,
        "control-panel": "none",
        style: { width: "400px", height: "400px" },
        alg: algorithm,
      })}

      {scramble && <p>Current moves: {scramble}</p>}
    </div>
  );
}

export default App;
