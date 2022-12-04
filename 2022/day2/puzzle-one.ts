import { readFileSync } from "fs";

enum ShapeScore {
  Rock = 1,
  Paper,
  Scissor
};

enum RoundScore {
  Loss = 0,
  Draw = 3,
  Win = 6
};

const shapeScoreMap: { [x: string]: number } = {
  X: ShapeScore.Rock,
  Y: ShapeScore.Paper,
  Z: ShapeScore.Scissor
}

const opponentShapeScoreMap: { [x: string]: number } = {
  A: ShapeScore.Rock,
  B: ShapeScore.Paper,
  C: ShapeScore.Scissor,
};

const isWinningMove = (score: number, opponentScore: number): boolean => {
  return score === ShapeScore.Rock && opponentScore === ShapeScore.Scissor ||
    score === ShapeScore.Scissor && opponentScore === ShapeScore.Paper ||
    score === ShapeScore.Paper && opponentScore === ShapeScore.Rock;
}

const fileContents = readFileSync('input.txt', 'utf-8');
let totalScore = 0;
fileContents.split('\r\n').forEach(pair => {
  const playedShapes = pair.split(' ');
  const opponentShapeScore = opponentShapeScoreMap[playedShapes[0]];
  const shapeScore = shapeScoreMap[playedShapes[1]];

  totalScore += shapeScore;
  if (opponentShapeScore === shapeScore) {
    totalScore += RoundScore.Draw;
  } else if (isWinningMove(shapeScore, opponentShapeScore)) {
    totalScore += RoundScore.Win;
  }
});

console.log(`Total score: ${totalScore}`);
