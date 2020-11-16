// Write a range function that takes two arguments, start and end, and
// returns an array containing all the numbers from start up to (and including) end.
const range = (a, b) => {
  let array = [];
  for (let i = a; i <= b; i++) {
    array.push(i);
  }
  return array;
};

// Next, write a sum function that takes an array of numbers and returns the
// sum of these numbers. Run the example program and see whether it does
// indeed return 55.
const sum = (numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(sum(range(1, 10)));

// As a bonus assignment, modify your range function to take an optional
// third argument that indicates the “step” value used when building the array.
// If no step is given, the elements go up by increments of one, corresponding
// to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5,
// 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1)
// produces [5, 4, 3, 2].
const range2 = (a, b, c = a < b ? 1 : -1) => {
  let array = [];
  if (c > 0) {
    for (let i = a; i <= b; i += c) {
      array.push(i);
    }
  } else {
    for (let i = a; i >= b; i += c) {
      array.push(i);
    }
  }
  return array;
};

console.log(range2(5, 2, -1));
