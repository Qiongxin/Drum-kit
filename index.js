let buttons = document.querySelectorAll(".drum")

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    playSound(buttons[i].innerText)
    addAnimation(buttons[i].innerText)
  })
}

document.addEventListener("keydown", (event) => {
  playSound(event.key)
  addAnimation(event.key)
})

const playSound = (key) => {
  switch (key) {
    case 'w': 
      let tom1 = new Audio("./sounds/tom-1.mp3")
      tom1.play()
      break
    case 'a':
      let tom2 = new Audio("./sounds/tom-2.mp3")
      tom2.play()
      break
    case 's':
      let tom3 = new Audio("./sounds/tom-3.mp3")
      tom3.play()
      break
    case 'd':
      let tom4 = new Audio("./sounds/tom-4.mp3")
      tom4.play()
      break
    case 'j':
      let crash = new Audio("./sounds/crash.mp3")
      crash.play()
      break
    case 'k':
      let kick = new Audio("./sounds/kick-bass.mp3")
      kick.play()
      break
    case 'l':
      let snare = new Audio("./sounds/snare.mp3")
      snare.play()
      break
    default: 
      alert("Please press the corresponding buttons on the screen")
  }
}

const addAnimation = (key) => {
  let button = document.getElementsByClassName(key)[0]
  button.classList.add("pressed")
  setTimeout(() => {
    button.classList.remove("pressed")
  }, 100)
}