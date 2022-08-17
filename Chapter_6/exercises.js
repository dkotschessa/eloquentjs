class Vec {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  plus(vector) {
    return new Vec(value.x + this.x, value.y + this.y)
  }
  minus(vector) {
    return new Vec(value.x - this.x, value.y - this.y)
  }
}
