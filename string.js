// String is the collection of characters

// below are some string's method

// concate 

let str1 = 'hello';

let str2 = 'world';

let welcome1 = str1 +' '+ str2;

let welcome2 = `${str1} ${str2}`;

// output: hello world

console.log(welcome1);
console.log(welcome2);

// indexOf  :  use to find the indexof charactor

let str = "hello world";

console.log(str.indexOf('e')); //output 1
console.log(str.indexOf('o')); // output 4
console.log(str.indexOf('or')); //output 7

// include : find characters or word inside the string and return boolean value

let check1 = str.includes('h'); 
console.log(check1) // output : true

let check2 = str.includes('he');
console.log(check2); // output : true

let chech3 = str.includes('hi');
console.log(check3) ;// output false

// string also know as array  (more detail in other units)
console.log(str[3]); // output: l 

// slice
console.log(str.slice(3,7)); // output: lo w


//string to num

let stringToInt = '1234';
let num = parseInt(stringToInt);

console.log(typeof(num)); // output: number

