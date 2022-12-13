import { readFileSync } from "fs";

const fileContents = readFileSync('input.txt', 'utf-8');
const chars = fileContents.split('');

let count = 0;
for(let i=0; i < chars.length; i++) {
  const char = chars[i];
  const nextChars = chars.slice(i, i+14);
  const set = new Set(nextChars);
  if(set.size !== nextChars.length) {
    continue;
  } else {
    console.log(`Number of characters before start-of-message marker: ${i+14}`);
    break;
  }
}
