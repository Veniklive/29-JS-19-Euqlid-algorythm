"use strict";

function GCD(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || (a === 0 && b === 0)) {
    return "Invalid input detected";
  }
  a = Math.abs(a);
  b = Math.abs(b);

  function algorithmEuclidean(a, b) {
    if (a !== 0 && b !== 0) {
      if (a > b) {
        a = a % b;
        return algorithmEuclidean(a, b);
      } else {
        b = b % a;
        return algorithmEuclidean(a, b);
      }
    } else {
      return a + b;
    }
  }
  return algorithmEuclidean(a, b);
}

console.log(GCD(12, 6)); //6
console.log(GCD(30, 18)); // 6
console.log(GCD(100, 25)); // 25
console.log(GCD(7, 13)); // 1
console.log(GCD(-12, 6)); // 6
console.log(GCD(12.1, 6)); // Invalit input detected
console.log(GCD("12", 6)); // Invalit input detected
console.log(GCD(0, 6)); // 6
console.log(GCD(0, 0)); // Invalit input detected
