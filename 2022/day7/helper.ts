import { readFileSync } from "fs";

export type DirMap = {[dir_name: string]: {
    directories: string[];
    files: { [name: string]: string };
    size: number;
  }
}

export const processData = (): DirMap => {
  const fileContents = readFileSync('input.txt', 'utf-8');
  const lines = fileContents.split('\r\n');

  const getDirName = (parentDir: string | undefined, currentDir: string): string =>
    !!parentDir ? `${parentDir}_${currentDir}` : currentDir;

  let currentDir = '/';
  let parentDir = '/';
  const directoriesTraversed: string[] = [];
  const dirStructure: DirMap = {};
  lines.forEach(line => {
    const inputOutput = line.split(' ');
    if(inputOutput[0] === '$') {
      if(inputOutput[1] === 'ls') {
        return;
      }
      
      if(inputOutput[2] == '..') {
        currentDir = directoriesTraversed.pop() ?? '/_/';
        parentDir = directoriesTraversed[directoriesTraversed.length-1] ?? '/';
      } else {
        parentDir = currentDir;
        currentDir = getDirName(parentDir, inputOutput[2]);
        if(parentDir !== '/') {
          directoriesTraversed.push(parentDir);
        }
        if(!dirStructure[currentDir]) {
          dirStructure[currentDir] = {
            directories: [],
            files: {},
            size: 0,
          }
        }
      }
      return;
    }
    
    if(inputOutput[0] === 'dir') {
      dirStructure[currentDir].directories.push(getDirName(currentDir, inputOutput[1]));
    } else {
      const size = inputOutput[0];
      const fileName = inputOutput[1];
      dirStructure[currentDir].files[fileName] = size;
      dirStructure[currentDir].size += +size;
      directoriesTraversed.forEach(dir => dirStructure[dir].size += +size);
    }
  });

  return dirStructure;
}
