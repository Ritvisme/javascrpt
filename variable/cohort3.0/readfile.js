"use strict";
const fs = require("fs");
const contents = fs.readFileSync("z.txt", "utf-8");
console.log(contents);
