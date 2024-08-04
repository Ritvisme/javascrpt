let details={
    username:"ritvik",
    age:19,
    location:"tumkur",
    welcomeMessage:function(){
        console.log(`welcome to the website, ${this.username}`)//this is used to access the object properties 
      console.log(this); 
    }
}
details.welcomeMessage();
details.username="eshita";
details.welcomeMessage();
console.log(this);//since nothing is defined in thte global object it shows empty however if you execute the same in the browser you will get the output as window 

function chai(){
   let  username="ritvik rocks"
   console.log(this.username);//hence this does not work in functions only in objects, there are other ways to do it which will be discussed ahead.
}
chai()
const numbers=(num1,num2) => {//this is arrow function.
    return num1+num2;//this is also called explicit return
    console.log(this);//this will show empty as this does not work in arrow functions
}
console.log(numbers(5,6));
//if you wrap it in curly braces then you need to use return, used very much in react.

const numbers1=(num2,num3) => (num2+num3)//when you use paranthesis you do not need to use return keyword
//it is also called imp-licit return
    console.log(this);//this will show empty as this does not work in arrow functions
console.log(numbers1(5,6));