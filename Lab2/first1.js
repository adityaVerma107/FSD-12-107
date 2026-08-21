import { writeFile, appendFile, readFile} from "fs/promises";


await appendFile("hello.txt", "\nFS is much easy")