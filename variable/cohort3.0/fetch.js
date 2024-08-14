// API for get requests
let fetchRes = fetch(
    "https://www.geeksforgeeks.org/javascript-fetch-method/");
        
    // FetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        })