import { EventEmitter } from "node:events";

const login=(name)=>{
 console.log(`${name} logged in`);
};

const start =() =>{
    console.log("systemm starts");
};

const working= (name)=>{
    console.log(`${name} add items to cart`);
};

const checkout = (name) =>{
    console.log(`${name}logged out`);
};

const task = new EventEmitter();
task.on("greet", login);
task.on("greet", working);


task.emit("greet","Steve Rogers");
task.emit("greet","Mudit Lohani");