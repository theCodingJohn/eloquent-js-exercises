// Write a function arrayToList that builds up a list structure like the one
// shown when given [1, 2, 3] as argument.

// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null,
//     },
//   },
// };

const arrayToList = (array) => {
  let list = {};
  for (let i = 0; i < array.length; i++) {
    list = { value: array[i], rest: list };
  }
  return list;
};
