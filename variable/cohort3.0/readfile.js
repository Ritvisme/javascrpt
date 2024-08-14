"use strict";
const fs = require("fs");//fs is a file sharing library
const contents = fs.readFileSync("z.txt", "utf-8");//utf-8 is a character encoding that you can understand  
console.log(contents);
