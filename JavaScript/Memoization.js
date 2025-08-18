// JavaScipt Memoization
function sqrnum(num) {
  return num * num;
}
// console.log(squrenum(5));
function memosqr(num) {
  let chache = {};

    return function optimizedSqure(num) {
    if (num in chache) {
      console.log("Print From Chache"); //Print return From where
      console.log(chache); //Print  chache
      return chache[num];
    } 
    else {
      console.log("return from Computing");
      const result = sqrnum(num);
      chache[num] = result;
      return result;
    }
  };
}
// Useses
const final = memosqr();
console.log(final(5));
console.log(final(4));
console.log(final(4));