console.log('chapter 8 exercises')

class OddsError extends Error {}

function primitiveMultiply(x, y) {
  const odds = Math.random()
  console.log(odds)
  if (odds < 0.2) {
    console.log('yay I can do this one')
    return x * y
  } else {
    throw new OddsError("This one's too hard")
  }
}

function retryMultiply(x, y) {
  for (;;) {
    try {
      return primitiveMultiply(x, y)
    } catch (e) {
      if (e instanceof OddsError) {
        console.log('retrying')
        return retryMultiply(x, y)
      }
    }
  }
}

const box = {
  locked: true,
  unlock() {
    this.locked = false
  },
  lock() {
    this.locked = true
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!')
    return this._content
  },
}

function withBoxUnlocked(funcvalue) {
  //unlock box
  //run funcvalue
  //lock box
}
