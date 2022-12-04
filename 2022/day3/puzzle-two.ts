import { readFileSync } from "fs";

const alphabet: string[] = Array.from(Array(26))
  .map((_value, index) => String.fromCharCode(index + 97));

const isUpper = (val: string) => /^[A-Z]*$/.test(val);

const findBadge = (elfGroup: string[]): string => {
  const elfOne = elfGroup[0].split('');
  const elfTwo = elfGroup[1].split('');
  const elfThree = elfGroup[2].split('');

  return elfOne
    .filter(item => elfTwo.includes(item) && elfThree.includes(item))[0];
}

const fileContents = readFileSync('input.txt', 'utf-8');
const lines = fileContents.split('\r\n');

let totalPriority = 0;
let elfGroup: string[] = [];
let count = 0
while(count < lines.length) {
  elfGroup.push(lines[count]);
  count++;
  if(count % 3 === 0) {
    const badge = findBadge(elfGroup);
    totalPriority += isUpper(badge) 
      ? alphabet.indexOf(badge.toLowerCase()) + 27
      : alphabet.indexOf(badge) + 1;
      console.log(elfGroup)
    elfGroup = []
  }
}

console.log(`Total priority: ${totalPriority}`);