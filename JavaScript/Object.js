// JavaScript Object
const Mobile = {
  // Key:value
  brand: "Samsung",
  model: "S24 ultra",
  variant: "Global",
  processor: "Snapdragon",
  camera: ["200mp", "12mp", "12mp"],
  telephoto: true,
  "selfie camera": "12mp",
  // Function in Object/Method
  fullModel: function () {
    return `${this.model} ${this.variant}`;
  },
};
Mobile.model = "S25 Ultra"; //Update element in object
console.log(Mobile); //Print the object

// print indivitual key
console.log(Mobile.brand);
console.log(Mobile["selfie camera"]);

console.log(Mobile.hasOwnProperty("camera")); //To cheak existance of a elements

// Convert object to Arrays
console.log(Object.keys(Mobile)); //Keys Arrey
console.log(Object.values(Mobile)); //Keys Values

// Fredge object
Object.freeze(Mobile); //For fredge
Mobile.model = "S26 Ultra"; //It will not update
// console.log(Mobile);

const obj1 = {
  A: 11,
  B: 12,
  c: 13,
};
const obj2 = {
  P: 21,
  Q: 22,
  R: 23,
};
const obj3 = {
  X: 31,
  Y: 32,
  Z: 33,
};

// Margeing Object
let fobj = Object.assign({}, obj1, obj2, obj3); //F1 Marged
console.log(fobj); //Print Marged Object
let fobj2 = Object.assign(obj1, obj2, obj3); //F2 Marged
console.log(fobj2); //Print Marged Object



// Constractor Object
function Person(fname, lname) {
  (this.firstName = fname), (this.lastName = lname);
}
// Creat different people
let person1 = new Person("ashok", "kumer"); //Person1
console.log(person1); //Print person1
let person2 = new Person("Rohit", "Sharma"); //Person2
person2.lastName = "kumer"; //Update Persons elemente
person2.age = 25; //Add new element in Person
console.log(person2); //Print person2

/*
We can take object in 2 ways.
  a) Object Literal (most common)
  b) new Object() Constructor
We can Access object in 2 ways
  a)dot notetion
  b)bracket notetion
*/