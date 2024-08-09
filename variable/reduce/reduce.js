const arr1=[1,2,3,4,5]
const result=arr1.reduce((acc,curval)=>acc+curval,0)
console.log(result)//The reduce() method in JavaScript executes a reducer function for each array element, returning a single accumulated value. It skips empty array elements and doesn’t modify the original array, making it useful for concise data aggregation.

//can also be written as 
const result2=arr1.reduce(function (acc1,curval1){
    console.log(`acc:${acc1}, and curvall:${curval1}`); 
        return acc1+curval1},0)

        //can be useful for aggregating shopping cart costs in websites

    const shoppingCart={
        items:[
            {name:'soap',price:40},
            {name:'shampoo',price:50},
            {name:'toothpaste',price:30}
        ]
    }
    const total=shoppingCart.items.reduce((acc,items)=>acc+items.price,0)
    console.log(total)