import { readFileSync } from "fs";

enum ShapeScore {
  Rock = 1,
  Paper,
  Scissor,
};

enum RoundScore {
  Loss = 0,
  Draw = 3,
  Win = 6,
};

const losingScoreMap: { [x: string]: number } = {
  A: ShapeScore.Scissor,
  B: ShapeScore.Rock,
  C: ShapeScore.Paper,
}

const winningScoreMap: { [x: string]: number } = {
  A: ShapeScore.Paper,
  B: ShapeScore.Scissor,
  C: ShapeScore.Rock
}

const opponentShapeScoreMap: { [x: string]: number } = {
  A: ShapeScore.Rock,
  B: ShapeScore.Paper,
  C: ShapeScore.Scissor,
};

const fileContents = readFileSync('input.txt', 'utf-8');
let totalScore = 0;
fileContents.split('\r\n').forEach(pairString => {
  const pair = pairString.split(' ');
  const opponentMove: string = pair[0];
  const roundOutcome: string = pair[1];

  switch (roundOutcome) {
    case 'X': // lose
      totalScore += losingScoreMap[opponentMove];
      break;
    case 'Y': // draw
      totalScore += (RoundScore.Draw + opponentShapeScoreMap[opponentMove]);
      break;
    case 'Z': // win
      totalScore += (RoundScore.Win + winningScoreMap[opponentMove]);
      break;
  }
});

console.log(`Total score ${totalScore}`);
