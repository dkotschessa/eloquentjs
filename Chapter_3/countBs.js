let countBs = s => {
  let count = 0
  for (let i in s) {
    if (s[i] == 'B') {
      count++
    }
  }
  return count
}

let countChar = (s, c) => {
  let count = 0
  for (let i in s) {
    if (s[i] == c) {
      count++
    }
  }
  return count
}
