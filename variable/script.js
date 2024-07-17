/*                                **IMPORTANT**
let,const,var assign space in the memory for whatever you are trying to define
const=once the value is set in it then it cannot be changed and the compiler throws error if you try to change it
 let=used to define a variable just like var 
 vat=used to declare variable but IS USED NO MORE AS IT CANNOT RECOGONIZE FUNCTIONAL SCOPE AND BLOCK SCOPE(the curly braces you use after
    for loop to restrict certain conditions just to that loop , earlier js wasnt able to understand that hence only use LET)
 TO PRINT MULTIPLE VARIABLES INSTEAD OF USING console.log() again and again you should use console.table(var1,var2,var3)*/

console.log("hey this is ritvik")
let a=10;
let b=30;
console.log(a+b)
let o={
    "name":"ritvik",
    "job":"web developer"
}
console.log(o)
// o.salary="100 lakh"
// console.log(typeof o)

let age=10;
if(age>=18)
{
    console.log("you are elligible to drive");
}
else{
     console.log("you are underage and you cannot drive");
}

let d=[3,4,2,10,1]
let f=[33,44,55,66,77]
let g= d.concat(f)// this is concat function nd then there is a spread operator
console.log(g)
console.log(...d,...f)//makes each element as individual and then joins them, this is preffered over concat
console.log(Array.isArray("ritvik"))//checks if the input is array
console.log(Array.from("ritvik"))//converts the given string to array,useful in data scraping from web as sometimes the data might come in 
//objects etc. but loop can be applied over array only hence this can convert it to an array.