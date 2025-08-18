//              *****JavaScipt Function*****

//      a) ***Function Declaration***
function myfunction(fullName,age,dateOfBirth=2000){      
    console.log('HEllo '+ fullName 
        + 'I Am ' + age + 'My Date of birth is ' + dateOfBirth
    );
}                   
// myfunction('Ali',25);  //Convoke Function
// myfunction('Biswazit',19,2006)

//      b)***self invocked Function***
// (function(message){
// console.log('I Am Self Invocked Function',message);
// })("Hii");

//      ***Store Function in variable***
let maths = function(x,y){
    return x*y;
}
// console.log(maths(3,4));    //Print the function/variable

//      c) ***Anonymous function***
let numbers = [4,5,6,7]
let sqnum = numbers.map(function(number){
    return number*number;
})
// console.log(sqnum);     //Print the function

//      d) ***Arrow Function (ES6)***
let add = (x,y) => x+y;
// console.log(add(3,5));      //Print the arrow function


//      e) ***nested function***
function greet(firstName){
    function sayhello(){
        console.log('hello '+ firstName );
    }
    return sayhello();
}
greet('Biswazit');       //Invocke the function



/*
1. What is a Function?
    A function is a block of reusable code that performs a specific task.
    Functions help in avoiding code repetition and make programs modular.

2.Ways to Create Functions
    a) Function Declaration
    b)self invocked Function
    c)Anonymous function
    d) Arrow Function (ES6)
    e) nested function

4. Parameters vs Arguments
    Parameters: Variables listed in function definition.
    Arguments: Values passed when calling a function.
*/