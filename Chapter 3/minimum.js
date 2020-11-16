// Chapter 2 introduced the standard function Math.min, which returns its smallest argument (see “Return Values” on page 27). We can build something
// like that now. Write a function min that takes two arguments and returns
// their minimum.
const minimum = (a, b) => (a > b ? b : a);
console.log(minimum(6, 5));
