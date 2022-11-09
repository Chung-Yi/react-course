import { get } from "https";
import React, { useEffect, useState } from "react";

function getCurrentScore() {
  return 100;
}

function getScoreByBoardName(boardName: String) {
  if (boardName === "boardA") {
    return 200;
  }
  if (boardName === "boardB") {
    return 1000;
  }
  return 0;
}

// 自定義的hook
function useGetTotalScore(boardName: string) {
  const [score, setScore] = useState(0);
  useEffect(() => {
    const currentScore = getScoreByBoardName(boardName) + getCurrentScore();
    setScore(currentScore);
  }, [boardName]);

  return score;
}

const ScoreBoardA: React.FC = () => {
  //   const [score, setScore] = useState(0);

  //   useEffect(() => {
  //     const currentScore = getCurrentScore() + getScoreByBoardName("boardA");
  //     setScore(currentScore);
  //   }, []);

  const score = useGetTotalScore("boardA");
  return <p>Total Score: {score}</p>;
};

const ScoreBoardB: React.FC = () => {
  //   const [score, setScore] = useState(0);

  //   useEffect(() => {
  //     const currentScore = getCurrentScore() + getScoreByBoardName("boardB");
  //     setScore(currentScore);
  //   }, []);
  const score = useGetTotalScore("boardB");
  return <p>Total Score: {score}</p>;
};

const Main: React.FC = () => {
  return (
    <>
      <ScoreBoardA />
      <ScoreBoardB />
    </>
  );
};

export default Main;
