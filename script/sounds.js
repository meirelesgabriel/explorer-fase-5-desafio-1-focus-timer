export default function() {
  const forestSound = new Audio('./sounds/Floresta.wav')
  const rainSound = new Audio('./sounds/Chuva.wav')
  const coffeShopSound = new Audio('./sounds/Cafeteria.wav')
  const firePlaceSound = new Audio('./sounds/Lareira.wav')

  /*function pressForestButton() {
    forestSound.play()
  }

  function pressRainButton() {
    rainSound.play()
  }

  function pressCafeButton() {
    coffeShopSound.play()
  }

  function pressFirePlaceButton() {
    firePlaceSound.play()
  }*/

  return {
    /*pressForestButton,
    pressRainButton,
    pressCafeButton,
    pressFirePlaceButton,*/
    forestSound,
    rainSound,
    coffeShopSound,
    firePlaceSound
  }
}