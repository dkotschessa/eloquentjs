redButton = document.getElementById('red')
blueButton = document.getElementById('blue')
yellowButton = document.getElementById('yellow')

box = document.getElementById('box')
redButton.addEventListener('click', () => {
  box.setAttribute('style', 'color: red')
})

blueButton.addEventListener('click', () => {
  box.setAttribute('style', 'color: blue')
})

yellowButton.addEventListener('click', () => {
  box.setAttribute('style', 'color: yellow')
})
