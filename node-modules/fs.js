import fs from "fs";
// console.log(fs);

console.log("starting");
fs.writeFile("file1.txt", "this is the content inthe text file.", () => {
  console.log("done");
  fs.readFile("file1.txt", (error, data) => {
    console.log(error, data.toString());
  });
});
console.log("ending");


fs.appendFile('file1.txt', ' is it working!!!', (e,d)=>{
    // if (e) throw e;
    console.log(d)
})