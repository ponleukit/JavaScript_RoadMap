// call back function is the kind of function that expect something back

//sorting

let arr = [2,8,4,5,3,9,1,12,113]

console.log(arr) // [1,113,12,2,3,4,5,8,9]

let cal = arr.sort((a,b)=>{
    return a > b;
});

// output [1,2,3,4,5,8,9,12,113]

// call back function is useful when we fetch data from database

axios.get('/uri', async (req, res)=>{
    //block code
    res.sendStatus(200).send('OK') // when we use call back which mean that function all expect something back
});

