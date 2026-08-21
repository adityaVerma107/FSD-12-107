import { readfFile } from "fs/promises";


const readData = async (filename)=>{
try {
    const content = await readFile(filename,`utf-8`);
    return content; 
} catch (error) {
    console.error("Error reading file:", error);
    throw error;
}
}
const writeData = async (filename, content)=>{
try {
    await writeFile(filename, content);
} catch (error) {
    console.error("Error writing file:", error);
    throw error;
}
}


}
const appendData = (filename, content)=> {

}   