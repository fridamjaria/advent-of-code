import { DirMap, processData } from "./helper";

const dirStructure: DirMap = processData();

const NEEDED_SPACE = 30000000;
const TOTAL_SPACE = 70000000;

const contents = Object.values(dirStructure);

const missingSpace = NEEDED_SPACE - (TOTAL_SPACE - contents[0].size);

const folderSize = contents
  .filter(content => content.size > missingSpace)
  .sort((a, b) => a.size - b.size)[0].size;

console.log(`Folder size ${folderSize}`);
