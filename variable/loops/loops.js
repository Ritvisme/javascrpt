// for of loop
const arr = [1, 2, 3, 4, 5];
for(const sum of arr){
    console.log(sum);

}//no need to specify the length of the array or the increment value 

//maps are basically key value pairs just like python had dictionaries it also had key value pairs

const map=new Map();
map.set('name','john');
map.set('age',30);
map.set('location','INDIA');
console.log(map);

//for of loop doesnt work with objects for that you can use for in loop
const myobject={
    js:'javascript',
    py:'python',
    rb:'ruby',
    java:'java',
    c:'c++'};
    for(const keys in myobject)
    {
        console.log(myobject[keys]);
    }

    //map however is non iterable and cannot be used with for loop
    //can be done for arrays using arrow function or normally as well
    const arr1=[12,23,34,45,56];
     arr1.forEach((element)=>{//The forEach() array method loops through any array, executing a provided function once for each array element in ascending index order. This function is referred to as a callback function.
        console.log(element);
     })

     const arr2=[22,33,44,55,66,77];
     arr2.forEach(function(item){console.log(item);})

     //array can have objects and can be iterated upon using the loop
     const myarr=[{languageName:'javascript',year:1995},{languageName:'python',year:1989},{languageName:'ruby',year:1995}];
     myarr.forEach((item)=>(console.log(item.year)));
     myarr.forEach((values)=>(console.log(values.languageName)));