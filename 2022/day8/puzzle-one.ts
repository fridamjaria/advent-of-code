import { readFileSync } from "fs";

const content = readFileSync('input.txt', 'utf-8');
const rows = content.split('\r\n');
const trees = rows.map(row => row.split(''));
let count = 0

trees.forEach((treeRow, rowIndex) => {
  if(rowIndex === 0 || rowIndex === trees.length-1) {
    count += treeRow.length;
    return;
  }

  treeRow.forEach((tree, index) => {
    if(index === 0 || index === treeRow.length -1) {
      count++;
      return;
    }
    
    const left = treeRow.slice(0, index);
    const right = treeRow.slice(index + 1);
    const bottom = trees.slice(rowIndex + 1).map(row => row[index]);
    const top = trees.slice(0, rowIndex).map(row => row[index]);

    if(left.every(leftTree => +leftTree < +tree) ||
      right.every(rightTree => +rightTree < +tree) || 
      bottom.every(bottomTree => +bottomTree < +tree) ||
      top.every(topTree => +topTree < +tree)) {
        count++;
      }
  })
  
});

console.log(`Number of visible trees: ${count}`)