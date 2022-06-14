//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/

//This was my first go - it printed all the ones that were not matched;
//  didn't stop at first time encountered non-consecutive #

let exerciseOneArr = [1, 2, 3, 5, 6, 7];
console.log(exerciseOneArr);
counter = exerciseOneArr[0];
// console.log(`counter is ${counter}`)
for (let i = 0; i < exerciseOneArr.length; i++) {
  console.log(`counter is ${counter}`);
  console.log(`i is ${i}`);
  console.log(`Arr[${i}] is ${exerciseOneArr[i]}`);
  if (exerciseOneArr[i] != counter) {
    console.log(`NO MATCH ${i}`);
  }
  counter += 1;
}


//This one will stop after 3:

let exerciseOneArrWorks = [1, 2, 3, 5, 6, 7];
console.log(exerciseOneArrWorks);
let counter = exerciseOneArrWorks[0];
for (let i = 0; i < exerciseOneArrWorks.length; i++) {
  do {
    if (exerciseOneArrWorks[i] != counter) {
      console.log(`not consecutive: ${i}`);
    }
    counter += 1;
  } while (exerciseOneArrWorks[i] === counter);
}

//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

// let numbers = [10, 12, -9, 3, -1, 0, 15];
let numbers = [3, 5, 7, 9, -10, 2, -22, -1]; 
console.log(numbers)
let sumNums = 0
for (n of numbers) {
    if (n > 0) {
        sumNums += n
    }
}
console.log(sumNums)