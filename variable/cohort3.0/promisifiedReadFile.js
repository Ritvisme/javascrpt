const fs=require("fs");

function readFile(ritvik)
{
    fs.readFile("z.txt","utf-8",function(err,data){
        ritvik(data);
    })
}

function readFile(fileName)
{
 return new Promise(readFile);
}
const p=readFile()
p.then(function(data){
    console.log(data);
})