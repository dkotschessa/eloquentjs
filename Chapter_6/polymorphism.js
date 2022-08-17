const toStringSymbol = Symbol('toString')
Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue yarn`
}
