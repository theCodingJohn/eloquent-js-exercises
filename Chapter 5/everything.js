// Analogous to the some method, arrays also have an every method. This one
// returns true when the given function returns true for every element in the
// array. In a way, some is a version of the || operator that acts on arrays, and
// every is like the && operator.
// Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the
// some method.

const every = (array, test) => {
  for (let i = 0; i < array.length; i++) {
    if (test(array[i]) === false) {
      return false;
    }
  }
  return true;
};

console.log(every([2, 4, 5], (n) => n < 10));
// Author's solution , effin' genius!
const every2 = (array, test) => !array.some((element) => !test(element));
