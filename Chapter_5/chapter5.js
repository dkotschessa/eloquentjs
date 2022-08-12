console.log('hey')

function filter(array, test) {
  let passed = []
  for (let element of array) {
    if (test(element)) {
      passed.push(element)
    }
  }
  return passed
}

function reduce(array, combine, start) {
  let current = start
  for (let element of array) {
    current = combine(current, element)
  }
  return current
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0))

/* exercises
“Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.”
*/

console.log(
  reduce(
    [
      [1, 2, 3, 4, 5],
      [6, 7],
    ],
    (a, b) => a.concat(b),
    []
  )
)

/*
“Write a higher-order function loop that provides something like a for loop statement.
 It takes a value, a test function, an update function, and a body function. Each iteration, 
 it first runs the test function on the current loop value and stops if that returns false.
  Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.
When defining the function, you can use a regular loop to do the actual looping.
”
*/

function notAFor(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value)
  }
}
