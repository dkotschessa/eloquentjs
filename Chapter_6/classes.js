// function makeRabbit(type) {
//     let rabbit = Object.create(protoRabbit);
//     rabbit.type = type
//     return rabbit
// }
//
// // Better to do
//
// function Rabbit(type) {
//     this.type = type
// }
//
// Rabbit.prototype.speak = function(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`)
// }
//
// let weirdRabbit = new Rabbit("weird")
// console.log(weirdRabbit)
//
// // even better better

class Rabbit {
    constructor(type) {
        this.type = type
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}

let killerRabbit = new Rabbit('killer')
let blackRabbit  = new Rabbit('black')


