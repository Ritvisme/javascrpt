let mySym=Symbol("key1")
let mysym2=Symbol("hello")
let Js={
    name:"ritvik",
    "fullname":"ritvik bhatnagar",
    mySym:"mykey1",//like this the datatype will show string so u should use the brackets
    [mysym2]:"hello world",
    location:"tumkur"
    }
    console.log(Js.location)
    console.log(Js["fullname"])
    // console.log(Js.full name) cannot be accessed using the dot, hence you generally access it using the brackets
    console.log(typeof(Js.mySym))//you cannot access the variavble using the dot, you need to use the bracket, the data type shows as string
    console.log(Js[mysym2])

    //to copy one object to another
    const target={a:1,b:2};
    const source={b:4,c:5};
    const obj4={...target,...source} //using the spread operator
    const returned=Object.assign(target,source);
    console.log(returned) 
    console.log(obj4);

    //if u get data from database
    console.log(Object.keys(obj4));//you get output in array, on whicb u can easily apply the loop


const course={
    coursename:" javascript chai with code",
    teacher:"hitesh choudary",
    student:"ritvik the smart boy"
}
//course.coursename this is the correct way to call an object but there is anothe syntax
//const{ the value u want to extract}=kahan se extract krni hai
const{teacher:teacher}=course//destructuring the object and array can be done same.
console.log(teacher );