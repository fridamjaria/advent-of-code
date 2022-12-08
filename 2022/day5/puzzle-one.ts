import { readFileSync } from "fs";
import { loadData } from "./helpers";

const data = loadData();
const stacks = data[0];
const moves = data[1];

moves.forEach(move => {
  const instruction = move.split(' ');
  let number = +instruction[1];
  const fromStack = +instruction[3] - 1;
  const toStack = +instruction [5] - 1;
  
  while(number > 0) {
    const crate = stacks[fromStack].pop();
    if(!!crate) {
      stacks[toStack].push(crate);
    }
    number--;
  }
});

const topCrates = stacks.map(stack => stack.pop()?.replace('[', '').replace(']', '')).join('');

console.log(`Top crates: ${topCrates}`);
