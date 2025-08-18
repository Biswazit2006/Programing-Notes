//              *****JavaScipt Conditional Statement*****
let age = 15;

//      a) ***if Statement***
if(age>18){
console.log('You are ready to go');
} else if(age>40){
console.log('You are old');
}else{
    console.log('You are not ready');
}


// 
let catagory = 'boat';
let cartype;

//      d) ***switch Statement***
switch(catagory){
    case 'car':
    cartype ='This is a car';
    break;
    case 'Motor Bike':
    cartype = 'This is a MotorBike';
    break;
    default:
    cartype = 'Unknown Vehicale'
}

console.log(cartype);   //To Print the Conditional Functionality


/*
1. What are Conditional Statements?
    Conditional statements let you execute different code blocks depending on whether a condition is true or false.

2. Types of Conditional Statements
    a) if Statement
    b) if...else Statement
    c) if...else if...else Statement
    d) switch Statement
    e) Ternary Operator (Shorthand if...else)
    f) Nested Conditions

3. When to Use What
  ✅ Use if...else → Simple decisions
  ✅ Use else if → Multiple conditions
  ✅ Use switch → Many fixed options
  ✅ Use ternary → Short, quick check
*/