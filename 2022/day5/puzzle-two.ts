import { readFileSync } from "fs";

const fileContents = readFileSync('input.txt', 'utf-8');
const lines = fileContents.split('\r\n\r\n');

const crates: string[] = lines[0].split('\r\n').filter(line => line.includes('['));
const moves: string[] = lines[1].split('\r\n');

const crateRows = crates.map(crate => crate
  .split('    ')
  .map(t => t.split(' ')))
  .map( val => val.flat());
const stacks: string[][] = [];
const stackLength = crateRows[0].length;

for(let i = 0; i < stackLength; i++) {
  stacks[i] = [];
}

crateRows.forEach((crates) => {
  for(let i = 0; i < stackLength; i++) {
    if (crates[i] !== '') {
      stacks[i].unshift(crates[i]);
    }
  }
});

moves.forEach(move => {
  const instruction = move.split(' ');
  const number = +instruction[1];
  const fromStack = +instruction[3] - 1;
  const toStack = +instruction [5] - 1;
  const startIndex = stacks[fromStack].length - number;
  const cratesToMove = stacks[fromStack].splice(startIndex, number);
  stacks[toStack] = stacks[toStack].concat(cratesToMove);
});

const topCrates = stacks.map(stack => stack.pop()?.replace('[', '').replace(']', '')).join('');

console.log(`Top crates: ${topCrates}`);
