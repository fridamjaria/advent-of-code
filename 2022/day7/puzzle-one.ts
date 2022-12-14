import { DirMap, processData } from "./helper";

const dirStructure: DirMap = processData();

let totalSize = 0;
Object.values(dirStructure).forEach(contents => contents.size < 100000 && (totalSize += contents.size));

console.log(`Total: ${totalSize}`);
