import { readFileSync } from "fs";

const fileContents: string = readFileSync('input_one.txt', 'utf-8');
const elvesCalories = fileContents.split('\r\n\r\n');

const maxSummedCalories = elvesCalories
  .map(elfCalories => elfCalories
    .split('\r\n')
    .map(calorie => parseInt(calorie))
    .reduce((prev, current) => prev + current))
  .reduce((prev, current) => prev > current ? prev : current);

console.log(`Max calorie value: ${maxSummedCalories}`);
