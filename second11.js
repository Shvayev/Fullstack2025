let x = 5;
console.log(x);
let y = 6;
console.log(typeof y);
let z = x + y;
console.log(z);
const c = 10;
c++; // Error (on purpose)
console.log(c);

let a=12345;
function lastDigit(num){
    let b = a % 10;
    while (b>0){
    b= b % 10;
    }
    console.log(b);
}
lastDigit(a);

