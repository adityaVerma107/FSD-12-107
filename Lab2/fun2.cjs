const f1 = () => {
  console.log("F1");
};

const f2 = () => {
  console.log("F2");
};

const f3 = () => {
  console.log("F3");
};

function main() {
  console.log("main");
  setTimeout(f1, 0);
  setImmediate(f2);
  process.nextTick(f3);
  console.log("end🐸");
}
main();

//it has the status during the execution of the code. It is a part of the event loop and it is used to schedule the execution of a function after the current operation completes. It is used to schedule a function to be executed after the current operation completes, but before any I/O events are processed.