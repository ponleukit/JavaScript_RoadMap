// argument: is passed by the calling function
// parameter: A parameter is in the called function.


function welcome(userName){                 //userName here is called parameter
    console.log(`Welcome ${userName}`);
}

welcome('Syan');                            // Syan is called argument



//function with multiple arguments

function mult(userName, passWord){
    let passWordLength = passWord.length;
    if(userName && passWordLength >=8){
        console.log(`welcome ${userName}`);
    }
}

mult('Syan', 'Syen1234@ml');


// as for ES6 we have other way for using this kind of multiple arguments

function newMult(...args){
    let checkpassLength = args[1];
    if(args[0] && checkpassLength){
        console.log(`welcome ${args[0]}`)
    }
}

newMult('Syan', 'Syen1234@ml');