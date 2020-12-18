let arr = [1,2,3,4,5,6,7];

for(let i = 0; i< arr.length ; i++){
    console.log(arr[i])
}
// output 1 to 7 

for(let a of arr){
    console.log(a)
}
// output: the same as previous

let a = 0; 

while(a< 5){
    console.log(a);
    a ++
}

// output: 0 to 4

let b = 0;
do{
    console.log(b);
    b++
}while(b<5);

//output: 0 to 4


//looping in string

let str = 'hello world';

for (let s of str){
    console.log(s);
}

// output 

/**
    h 
    e 
    l 
    l 
    o 
    
    w 
    o 
    r 
    l 
    d
 */


// loop array of object

const obj = [
    {
        a: 1,
        b: 2
    },
    {
        a: 3,
        b: 4
    },
    {
        a: 5,
        b: 6
    },
    {
        a: 7,
        b: 8
    },
]


for(let o of obj){
    console.log(`${o.a} and ${o.b}`)
}

// output : 
/**
    1 and 2 
    3 and 4 
    5 and 6 
    7 and 8
 */