// array in javascript store data with reference not actual value

let arr = [1,2,3,4,5];

let copyArray = arr; 

copyArray.pop();

console.log(arr); // output: [1,2,3,4]  this heppen because arr past only the reference to the copyArray 


let arr1  = [1,2,3,4,5];
// use ES6 
let copyArray1 = [...arr1]

copyArray1.pop();

console.log(arr1);  // output: [1,2,3,4,5]
console.log(copyArray1); //output: [1,2,3,4]


/* Array's Method */

// pop() remove the last of the array

let arr2 = [1,2,3,4,5,6]
arr2.pop();
console.log(arr2);  //output: [1,2,3,4,5]

// push() add value to array

arr2.push(6);
console.log(arr2) //output: [1,2,3,4,5,6]

// shift() remove the fist element from array

arr2.shift(); 
console.log(arr2);  // output: [2,3,4,5,6]

// splice(a,b)  remove element from array start from index a, and number of element which need to remove b

arr2.splice(3,2) 
console.log(arr2) // output: [2,3,4]

arr2.splice(arr2.indexOf(3), 1);
console.log(arr2) // output: [2,4]

// sort() use to sort the array

let arr3 = [5,4,3,7,1,11,123]
console.log(arr3.sort()); // output [1,11,123,3,4,5,7]  the problem is that sort() method compare from right index to left index of each element

    // use callback function to solve this problem

console.log(arr3.sort((a, b) => {
    return a > b
}));                // output   [1,3,4,55,7,11,123]


//  filter()

console.log(arr3.filter((a)=>{
    return a%2 == 0
}));                    // output   [4]


// forEach(value, index)

arr3.forEach((value, index)=>{
    console.log(value, index);
})

/* String in js also known as array  */

let str = "welcome home";   // str = ['w','e','l','c','o','m','e',' ','h','o','m','e'];

console.log(str.indexOf('w')); // output 0