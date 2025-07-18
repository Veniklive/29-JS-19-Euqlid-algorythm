"use strict";

function greatestCommonDivisor(a, b) {
  try {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
      return new TypeError("Invalid input detected");
    }
    while (a !== 0 && b !== 0) {
      if (a > b) {
        a = a % b;
      } else {
        b = b % a;
      }
    }
    return a + b;
  } catch (error) {
    return error;
  }
}

console.log(greatestCommonDivisor(12, 6)); //6
console.log(greatestCommonDivisor(30, 18)); // 6
console.log(greatestCommonDivisor(100, 25)); // 25
console.log(greatestCommonDivisor(7, 13)); // 1
console.log(greatestCommonDivisor(-12, 6)); // Invalit input detected
console.log(greatestCommonDivisor(12.1, 6)); // Invalit input detected
console.log(greatestCommonDivisor("12", 6)); // Invalit input detected
console.log(greatestCommonDivisor(0, 6)); // Invalit input detected
console.log(greatestCommonDivisor(0, 0)); // Invalit input detected
