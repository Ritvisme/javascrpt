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