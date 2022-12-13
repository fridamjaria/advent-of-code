import { readFileSync } from "fs";

const fileContents = readFileSync('input.txt', 'utf-8');
const chars = fileContents.split('');

let count = 0;
let set = new Set<string>();
for(let i=0; i < chars.length; i++) {
  set.add(chars[i]);
  count++;
  if(count === 4 && set.size === 4) {
    console.log(`Number of chars before 1st packet: ${i+1}`);
    break;
  } else if(count === 4 && set.size < 4){
    count = 0;
    set = new Set<string>();
  }
}
