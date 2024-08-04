//there are two scope like variables in c global and local
var c=300;
if (true){
    let a=200; 
    var c=500;
    console.log(a);//this will show 200 as the value of a is defined in the local scope
}
console.log(c);//this will show 500 as the value of c is changed in the local scope
//console.log(a);//this will show error as the value of a is not defined in the global scope
//hence using var is always avoided as it does not follow scope instead use let and const

//function can be defined 2 ways
console.log(add1(6));//here you can access the function before defining it
function add1(num){
    return num+1
}
console.log(add2(6));//in this method you cannot access the function before defining it
const add2=function(num){
    return num+2
}

