// Arrays have a reverse method that changes the array by inverting the
// order in which its elements appear. For this exercise, write two functions,
// reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
// as argument and produces a new array that has the same elements in the
// inverse order. The second, reverseArrayInPlace, does what the reverse
// method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
// Thinking back to the notes about side effects and pure functions in
// “Functions and Side Effects” on page 54, which variant do you expect to be
// useful in more situations? Which one runs faster?
const reverseArray = (numbers) => {
  let array = [];
  for (let number of numbers) {
    array.unshift(number);
  }
  return array;
};

const arr = [1, 2, 3, 4, 5, 6, 7];

const reverseArrayInPlace = (array) => {
  let temp = 0;
  for (let i = 0; i < array.length / 2; i++) {
    temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return arr;
};

console.log(reverseArrayInPlace(arr));
