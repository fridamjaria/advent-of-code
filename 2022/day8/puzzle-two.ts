import { readFileSync } from "fs";

const content = readFileSync('input.txt', 'utf-8');
const rows = content.split('\r\n');
const trees = rows.map(row => row.split(''));

const getNumberOfTrees = (array: string[], value: string) => {
  const index = array.findIndex(a => +a >= +value);
  if(index === -1) {
    return array.length;
  } else {
    return index + 1;
  }
}

let highestPossibleScore = 0;
trees.forEach((treeRow, rowIndex) => {
  if(rowIndex === 0 || rowIndex === trees.length-1) {
    return;
  }

  treeRow.forEach((tree, index) => {
    if(index === 0 || index === treeRow.length -1) {
      return;
    }

    const left = treeRow.slice(0, index).reverse();
    const leftTrees = getNumberOfTrees(left, tree);
    const right = treeRow.slice(index + 1);
    const rightTrees = getNumberOfTrees(right, tree);
    const bottom = trees.slice(rowIndex + 1).map(row => row[index]);
    const bottomTrees = getNumberOfTrees(bottom, tree);
    const top = trees.slice(0, rowIndex).map(row => row[index]).reverse();
    const topTrees = getNumberOfTrees(top, tree);
    let scenicScore = leftTrees * rightTrees * bottomTrees * topTrees;
    if (scenicScore > highestPossibleScore) {
      highestPossibleScore = scenicScore;
    }
  })
});

console.log(`Highest possible scenic score: ${highestPossibleScore}`);
