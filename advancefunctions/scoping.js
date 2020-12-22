// scope refere to the location block where we declare our variable

function sc(){
    let msg = "this variable can access only in sc function scope.";
    console.log(msg)            // output: this variable can access only in sc function scope
};

console.log(msg); // output: undefine
sc();


let greeting = 'welcome to ..!';

function gr(){
    let greeting = " hello ";
    console.log(greeting); // hello
};

console.log(greeting); // welcome to..!
gr.call()// call is default predefine function use for calling function declaration


//block scope 
//block is everything inside the {} if can be in obj, function, while loop, if else...

if(true){
    let score = 99;
}

console.log(score)// output: undefine  this happen cause score in if block code and only can access in if block 
