import resetControls from "./controls.js";
import { Timer } from "./timer.js"
import { elements } from "./elements.js"
import Sound from './sounds.js'

const {
  playButton,
  pauseButton,
  stopButton,
  turnUpButton,
  turnDownButton,
  forestSoundButton,
  rainSoundButton,
  cafeSoundButton,
  firePlaceSoundButton,
  minutesDisplay,
  secondsDisplay
} = elements

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)


const timer = Timer({
  playButton,
  pauseButton,
  minutesDisplay,
  secondsDisplay,
})

const sound = Sound()

playButton.addEventListener('click', function() {
  if(minutesDisplay.textContent == '00' & secondsDisplay.textContent == '00') {
    return;
  } else {
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
    timer.countDown()
    
  }
})

pauseButton.addEventListener('click', function () {
  // reset controls:
  resetControls(playButton, pauseButton)
  // reset timer:
  timer.reset()
  //clearTimeout(timerTimeOut)
})

stopButton.addEventListener('click', function () {
  // reset controls:
  resetControls(playButton, pauseButton)
  //playButton.classList.remove('hide')
  //pauseButton.classList.add('hide')
  // reset timer:
  timer.reset()
  //clearTimeout(timerTimeOut)
  //console.log(timerTimeOut)
  // set timer:
  timer.updateDisplay(minutes, seconds)
  //minutesDisplay.textContent = String(minutes).padStart(2, '0')
  //secondsDisplay.textContent = '00'
})

turnUpButton.addEventListener('click', function () {
  // set timer
  timer.updateDisplay(Number(minutesDisplay.textContent) + 5, secondsDisplay.textContent)
  //console.log('oi')
})

turnDownButton.addEventListener('click', function () {
  /*playButton.classList.remove('hide')
  pauseButton.classList.add('hide')
  clearTimeout(timerTimeOut)
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = '00'*/
  // set timer:
  timer.updateDisplay(Number(minutesDisplay.textContent) - 5, secondsDisplay.textContent)

  if (minutesDisplay.textContent <= 0) {
    timer.updateDisplay(0, 0)
  }
})

let retornoFuncao = forestSoundButton.addEventListener('click', function() {
  console.log('entrou no botão da floresta')
  if(sound.forestSound.paused) {
    sound.forestSound.play()
  } else {
    sound.forestSound.pause()
  }
})
console.log(retornoFuncao)
rainSoundButton.addEventListener('click', function() {
  console.log('entrou no botão da chuva')
  if(sound.rainSound.paused) {
    sound.rainSound.play()
  } else {
    sound.rainSound.pause()
  }
})

cafeSoundButton.addEventListener('click', function() {
  console.log('entrou no botão da cafeteria')
  if(sound.coffeShopSound.paused) {
    sound.coffeShopSound.play()
  } else {
    sound.coffeShopSound.pause()
  }
})

firePlaceSoundButton.addEventListener('click', function() {
  console.log('entrou no botão da lareira')
  if(sound.firePlaceSound.paused) {
    sound.firePlaceSound.play()
  } else {
    sound.firePlaceSound.pause()
  }
})
