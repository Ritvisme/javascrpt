const fs=require("fs");
function print(err,data){
    console.log(data);
}
fs.readFile("z.txt","utf-8",print);
fs.readFile("a.txt","utf-8",print);
console.log("HELLO ALL");
//this code is showing  output in replit and HELLO ALL IS DISPLAYED FIRST AS APPOSED TO THE CONTENT OF Z.TXT THEN A.TXT BECAUSE IT IS ASYNCH SO IT IS LIKE YOU PUT THE WATER TO BOIL AND MOVE ON TO WASH CLOTHES WHILE THE WATER BOILS AND THEN DO A THIRD TASK HENCE THE LAST TASK IS EXECUTED FIRST AS IT NEEDS LESS TIME AND THEN Z.TXT IS PRINT AND A.TXT IS PRINTED