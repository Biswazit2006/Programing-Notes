//JavaScript Loop
let car = ['BMW','Mustang','Lamborgini','Nissan','Tesla']

//      a) ***for Loop***
for (let i = 0; i<car.length;i++ ){
console.log(car[i]);
}


let person={
    name:'Biswazit',
    age:'19',
    country:'Bangladesh'
}
//      b) ***for...in Loop***
for (const i in person) {
    // console.log(i + ':'+person[i]);
}


//      c) ***forEach() Method(Array Only)***
car.forEach(function(i){
    // console.log(i);
});


//      d) ***for...of Loop (for Arrays, Strings, Iterables)***
for(let i of car){
    // console.log(i);
}

//     e) ***while Loop***
let num = 0;
while(num<10){
    // console.log(num);
    num++;
}

//      f) ***do...while Loop***
let n = 0;
do{
    // console.log(n);
    n++;
}while(n<10)



/*
1. What is a Loop?
    A loop is used to repeat a block of code multiple times until a condition is false.

2. Types of Loops in JavaScript
    a) for Loop (For Arrays)
    b) for...in Loop (for Objects) 
    c) forEach() Method (Array Only)
    d) for...of Loop (for Arrays, Strings, Iterables)
    e) while Loop
    f)do...while Loop 
     

When to Use Which Loop?
    ✅ for → When number of iterations is known
    ✅ while → When iterations depend on condition
    ✅ do...while → When code must run at least once
    ✅ for...in → For objects (keys)
    ✅ for...of → For arrays/iterables (values)
    ✅ forEach() → Quick array looping
*/