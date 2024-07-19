// //1- Write a JavaScript function that will iterate from n to 0. For each iteration,
// // it will check if the current number is odd or even, and display a message to the screen.
// // iterateAndLog(3); =>
// // Sample Output :
// // "2 is even"
// // "1 is odd"
// // "0 is even"

// function iterateAndLog(n) {
//     n-=1;
//   if (n === 0 ) return ;
//   if (n % 2 === 0) console.log(n + " is even");
//   else console.log(n + " is odd");

//   return iterateAndLog(n );
// }

// // RECURSIVELY
// //2- Write a JavaScript program to get the first n Fibonacci numbers
// // That is, fib(0) is 1, fib(1) is 1, fib(2) is 2, fib(3) is 3, fib(4) is 5, etc.
// //  Notice that each fibonacci number can be computed by adding the previous two fibonacci numbers,
// //  with the exception of the first two: fib(0) and fib(1). More succinctly,
// //  fib(0) is 1
// //  fib(1) is 1
// //  fib(n) is fib(n - 1) + fib(n - 2)
// //  Write a function called fib that accepts a number n as a parameter and computes the nth fibonacci number using the above rules.
// let fib = (number) => {
//   if (number === 0) return 1;
//   if (number === 1) return 1;
//   return fib(number - 1) + fib(number - 2);
// };
// function fibo(number) {
//   return fibo(number - 1) + fibo(number - 2);
// }
// //3.Write a function called sumOfFirstAndLast that
// //takes a number as a parameter and returns the sum of the first and last digits. Please do this without turning the number into a string.


// function sumOfFirstAndLast(number) {
//     if (number < 10) return number;
//     return number % 10 + sumOfFirstAndLast(Math.floor(number / 10));
//   }