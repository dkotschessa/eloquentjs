let rabbit = {}
rabbit.speak = function (line) {
  console.log(`The rabbit says '${line}';`)
}

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`)
}

let whiteRabbit = { type: 'white', speak }
let hungryRabbit = { type: 'hungry', speak }

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting")
hungryRabbit.speak("god I'm so hungry")

speak.call(hungryRabbit, 'burp')
