function sum(a,b){
    return a+b;
}
let ans=sum(5,6)
console.log(ans);
// if you input a string then it treats the integer as string as well and concatenates them

//for that you can use parseInt() function

let ans1=sum(parseInt('15'),parseInt('6'))
console.log(ans1);