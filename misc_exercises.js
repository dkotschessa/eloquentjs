console.log('yup it\'s working')

class Group {
    constructor() {
        this.values = Array()
    }
    add(value) {
        if (!this.values.includes(value)) {
            return this.values.push(value)
        }

    }
    delete(value) {
    if (this.values.includes(value)) {
        index = this.values.indexOf(value)
        return this.values.splice(value, 1)
    }
    }
    has(value) {
        return (this.values.includes(value))
    };
    from(iterable) {
        for (let i of iterable) {
            this.add(i)
        }
    }
    next() {
        for (let i of this.values){
            return i
        }
    }

    }





class MatrixIterator {
  constructor(matrix) {
    this.x = 0
    this.y = 0
    this.matrix = matrix
  }

  next() {
    if (this.y == this.matrix.height) return { done: true }

    let value = { x: this.x, y: this.y, value: this.matrix.get(this.x, this.y) }
    this.x++

    if (this.x == this.matrix.width) {
      this.x = 0
      this.y++
    }
    return { value, done: false }
  }
}