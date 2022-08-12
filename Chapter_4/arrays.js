let range = (x, y) => {
  let arr = []
  for (i = x; i <= y; i++) {
    arr.push(i)
  }
  return arr
}

let stepRange = (x, y, step) => {
  let arr = [],
    value = x
  for (i = x; value <= y; i++) {
    arr.push(value)
    value += step
  }
  return arr
}

let sum = (x, y) => {
  let result = 0
  for (i = x; i <= y; i++) {
    result += i
  }
  return result
}

let reverseCount = x => {
  for (i = x; i >= 0; i--) {
    console.log(i)
  }
}

let reverseArray = arr => {
  const lastItem = arr[arr.length - 1]
  let newArr = []
  for (i = arr.indexOf(lastItem); i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

let reverseArrayInPlace = arr => {
  const lastItem = arr[arr.length - 1]
  for (
    i = arr.indexOf(lastItem), j = arr[0];
    i >= 0, j < arr.length;
    i--, j++
  ) {
    arr[j] = arr[i]
  }
  return arr
}

let arrayToList = arr => {
  let list = null
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list }
  }
  return list
}

let listToArray = list => {
  let array = []
  for (let node = list; node; node = node.rest) {
    array.push(node.value)
  }
  return array
}

function deepEqual(a, b) {
  if (a == b) return true

  if (a == null || typeof a != 'object' || b == null || typeof b != 'object')
    return false

  let keysA = Object.keys(a),
    keysB = Object.keys(b)

  if (keysA.length != keysB.length) return false

  for (let key of KeysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false
  }

  return true
}
