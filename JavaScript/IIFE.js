//Immediately Invoked Function (IIFE)

(function(a,b){
    console.log(a+b);
})(4,8);

((a,b) => console.log(a*b))(3,4); //IIFE with Arrow

 const myModule = (function(){
    let  privatevar = "This is a private variable"
    function privateFunc(){
        console.log("This is a Private Function");
    }
    return {
       PublicVar: "This is a public Variable",
       publicMethod: function(){
        console.log("This is a public Method");
        privateFunc();
       }
    }
 })();

//  console.log(myModule.privatevar); //Unaccessible
// console.log(myModule.privateFunc);     //Unaccessible

console.log(myModule.PublicVar);        //Accessible
console.log(myModule.publicMethod());   //Accessible
