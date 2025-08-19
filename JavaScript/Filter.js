const fruits = ['mango','Apple','Orange','Graps','Banana'];

const country = new Map(
    [
        ['Bn','Bangladesh'],
        ['In','India'],
        ['Pk','Pakistan']
    ]
);
country.set('Bu','Butan')

const myCountry ={
    Bn:'Bangladesh',
    In:'India',
    Pk:'Pakistan'
}

// fruits.forEach(fruits => console.log(fruits));
const fruitsb = fruits.filter((fruits)=>fruits.toLowerCase().startsWith('b'));
// console.log(fruitsb);
let fruitslen = fruits.filter(fruits=>fruits.length===5);
// console.log(fruitslen);

let fruitStartG = fruits.filter(fruits=>fruits.toLowerCase().includes('g'));
// console.log(fruitStartG);

let num = [1,2,3,4,5,6,7,8,9];
let big5 = num.filter(num=>{
    return num>5
});
console.log(big5);
