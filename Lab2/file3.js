import { stat } from "fs/promises";

const fstat = await stat("file1.js");

console.log("File Size:", fstat.size, "bytes");
console.log(`is file: ${fstat.isFile()}`);
console.log(`is folder: ${fstat.isDirectory()}`);
console.log(`is syslink: ${fstat.isSymbolicLink()}`);
