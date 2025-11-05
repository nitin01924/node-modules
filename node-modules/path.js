// const path = require("path")
import path from "path"; // because we set the "type" : "module" in the package.json

// this module is just join the parameters which are given.
const filePath = path.join("folder", "subfolder", "file.txt");
console.log(filePath);

//this module is goes to the left to root folder like C: and gives the complete directory
const absolute = path.resolve("folder", "file.txt");
console.log(absolute);

//it gives the basename of the base file with extension
const base = path.basename("/home/user/docs/file.txt");
console.log(base); // file.txt

//this is used to get the file's extension.
console.log(path.extname("file.txt")); // .txt
console.log(path.extname("image.jpeg")); // .jpeg

//it shows only the directory name and not include the current file.
console.log(path.dirname("/home/user/docs/file.txt"));
// /home/user/docs

//it is used to seperate the path like in root, dir, basefile, filename and extension and gave them like a object
const parsed = path.parse("/home/user/docs/file.txt");
console.log(parsed);

//this is reverse of the parse (it gives the path from a obj)
const formatted = path.format({
  dir: "/home/user/docs",
  name: "file",
  ext: ".txt",
});
console.log(formatted); //   /home/user/docs/file.txt

//this module function is normalize the path like it neglect the extra slashesh '////' and the dots '.....'
console.log(path.normalize("/home//user/docs/../file.txt"));
//  /home/user/file.txt

//it ensures that the folder is start form the root folder.
console.log(path.isAbsolute("/home/user")); // true
console.log(path.isAbsolute("folder/file.txt")); // false => because the root '/' is not written in that module it would be "/folder/file.txt"
