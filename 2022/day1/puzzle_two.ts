import { readFileSync } from "fs";

const fileContents: string = readFileSync('input.txt', 'utf-8');
const elvesCalories = fileContents.split('\r\n\r\n');

let elvesSummedCalories = elvesCalories
  .map(elfCalories => elfCalories
    .split('\r\n')
    .map(calorie => parseInt(calorie))
    .reduce((prev, current) => prev + current));
console.log(elvesSummedCalories)

elvesSummedCalories = elvesSummedCalories.sort((a, b) => b - a);
console.log(elvesSummedCalories)
const topElvesSummedCalories = elvesSummedCalories[0] + elvesSummedCalories[1] + elvesSummedCalories[2];

console.log(`Top 3 elves summed calories: ${topElvesSummedCalories}`);
