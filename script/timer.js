import resetControls from './controls.js'

export function Timer ({
  playButton,
  pauseButton,
  minutesDisplay,
  secondsDisplay,
}) {
  let timerTimeOut
  
  function updateDisplay(minutes, seconds) {
    //console.log('minutesDisplay.textContent 1: ', minutesDisplay.textContent)
    //console.log('minutes 1: ', minutes)
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    //console.log('minutesDisplay.textContent 2: ', minutesDisplay.textContent)
    //console.log('minutes 2: ', minutes)
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
    //console.log('minutesDisplay.textContent 3: ', minutesDisplay.textContent)
    //console.log('minutes 3: ', minutes)
  }

  function countDown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      if (seconds <= 0) {
        seconds = 60
  
        if (minutes <= 0) {
          resetControls(playButton, pauseButton)
         return
        }
  
        // set timer:
        minutes = minutes - 1
        //updateDisplay((minutes - 1), seconds)
        //minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
        console.log('entrouuuu')
      }
      // set timer:
      updateDisplay(minutes, (seconds - 1))
      //secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
  
      countDown()

      // console.log(timerTimeOut)
      
  }, 1000)
}
  
  function reset() {
    clearTimeout(timerTimeOut)
  }

  return {
    countDown,
    updateDisplay,
    reset
  }
}
