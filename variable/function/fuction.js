//function is basically where you can enclose the entire code in a package and call it whenever you want
//the name of the function is the reference and you add parantheses to execute the function
function name(){
console.log("RITVIK");
console.log("Bhatnagar");
}
name();//this is the most basic way of calling the function
//here while defining the function the  variables you pass are the parameters
function add(a,b){
console.log(a+b);
}
add(5,6);
add(6,"9");//this will show 69 as the output as it thinks one is string hence other must be too
//when you are calling the function the value you are passing is called the argument
function add1(a,b){
    return a+b,a-b,a*b;//executes the most recent command that is of multiplication
    
    return a-b;//the code after the return statement is unreachable and not executed.
    }
    const result=add1(9,3);
    console.log(result);

    function username(name){
        if(name==undefined){//can be written as if(!name) means the same thing
            name="ritvik";
            console.log(name);
            return
        }
        else{
            return `${name} my name is ritvik bhatnagar`;
        }
        return '${name} my name is ritvik bhatnagar';
    }
    console.log(username());
    console.log(username("hehe"));
    //if you want to pass multiple arguments, you can use the rest operator
    function calculateValue(value1,value2,...num){
        //here the first two values are assigned to the first two variables and the rest are assigned to the rest operator and shown in the array.
        console.log(num);
        //converts the arguments into an array on which loop can be used
        //to find the sum of the numbers.
    }
    console.log(calculateValue(1,2,3,4,5,6,7,8,9));