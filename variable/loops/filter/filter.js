//filter is a way to use conditonals on arrays and filter out the values that are not required
const arr=[1,2,3,4,5,6,7,8];
const result=arr.filter((items)=>items>6)
console.log(result);
//hence this way you are able to filter out the data
//one thing to remember is that the filter method does not change the original array but returns a new array
//imp thing is when you start a new scope then u need to use the return keywrd
//we were taught this in implicit and explicit return type functions 
const arr2=[1,2,3,4,5,6,7,8,9,10];
const result1=arr2.filter((item)=>{
    if(item>6)
        return item;
    
})