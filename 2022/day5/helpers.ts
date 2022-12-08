import { readFileSync } from "fs";

export const loadData = (): [string[][], string[]] => {
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
        stacks[i].push(crates[i]);
      }
    }
  });

  return [stacks, moves];
}