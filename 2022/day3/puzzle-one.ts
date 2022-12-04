import { readFileSync } from "fs";

const alphabet: string[] = Array.from(Array(26))
  .map((_value, index) => String.fromCharCode(index + 97));

const isUpper = (val: string) => /^[A-Z]*$/.test(val);

const fileContents = readFileSync('input.txt', 'utf-8');
const lines = fileContents.split('\r\n');
let totalPriority = 0
lines.forEach(line => {
  const compartmentOne = line.substring(0, line.length/2).split('');
  const compartmentTwo = line.substring(line.length/2).split('');
  const commonType = compartmentOne.filter(itemType => compartmentTwo.includes(itemType))[0];
  totalPriority += isUpper(commonType) 
    ? alphabet.indexOf(commonType.toLowerCase()) + 27
    : alphabet.indexOf(commonType) + 1;
});

console.log(`Total priority: ${totalPriority}`);
