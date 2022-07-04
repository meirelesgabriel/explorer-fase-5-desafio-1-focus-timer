import resetControls from "./controls.js";
import { Timer } from "./timer.js"

const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const turnUpButton = document.querySelector('.turn-up')
const turnDownButton = document.querySelector('.turn-down')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
})

playButton.addEventListener('click', function() {
  if(minutesDisplay.textContent == '00' & secondsDisplay.textContent == '00') {
    return;
  } else {
    timer.countDown()
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
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
