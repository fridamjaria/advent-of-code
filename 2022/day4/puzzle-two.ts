import { readFileSync } from "fs";

const fileContents = readFileSync('input.txt', 'utf-8');
const lines = fileContents.split('\r\n');

const getRangeArray = (rangeString: string): number[] => {
  const range: number[] = rangeString.split('-').map(v => +v);
  return Array.from({ length: range[1] - range[0] + 1 }, (_, i) => range[0] + i);
}

const rangesOverlap = (array1: number[], array2: number[]): boolean =>
  array1.some(item => array2.includes(item));

let count = 0;
lines.forEach(line => {
  const ranges = line.split(',');
  const elfRangesOne: number[] = getRangeArray(ranges[0]);
  const elfRangesTwo : number[] = getRangeArray(ranges[1]);
  const hasOverlappingRanges = rangesOverlap(elfRangesOne, elfRangesTwo) ||
  rangesOverlap(elfRangesTwo, elfRangesOne);

  if (hasOverlappingRanges) {
    count++;
  }
});

console.log(`Total count: ${count}`);
