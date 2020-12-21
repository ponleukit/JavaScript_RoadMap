// datatype that pass by value:  primative datatype such as string number and boolean
// object function and array are by reference



// passing by value

let obj = {
    a: 1, 
    b: 2
}

let fValue = function(val){
    val = 2;
    return ;
}
fValue(obj.a);

console.log(obj)  //output: { a:1, b:2}  it's because the obj.a pass value as the argument

// passing by reference

let fRef = function(ref){
    ref.a = 2; 
    return ;
}

fRef(obj);
console.log(obj);   // output: {a:2, b:2}  it's becuase when we pass the obj as an argument. Obj passed on ly reference.
