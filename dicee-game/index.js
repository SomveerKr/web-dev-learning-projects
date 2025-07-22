document.querySelector('.btn').addEventListener('click', whoWins)

function whoWins() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1 //Random Number b/w 1-6
  var randomDiceImage = 'dice' + randomNumber1 + '.png' // Random Dice Image b/w dice1-dice6
  var randomImageSource = 'images/' + randomDiceImage //Random Image Source b/w images/dice1- images/dice6
  var image1 = document.querySelectorAll('img')[0] //To select first dice img tag

  image1.setAttribute('src', randomImageSource) //To randomly change the image of dice b/w dice1-dice6

  //For Second Dice Image
  var randomNumber2 = Math.floor(Math.random() * 6) + 1
  var randomImageSource2 = 'images/dice' + randomNumber2 + '.png'

  var image2 = document.querySelectorAll('img')[1]

  image2.setAttribute('src', randomImageSource2)
  // OR
  // document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins! 🚩'
    var audio = new Audio('sounds/win.mp3')
    audio.play()
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins! 🚩'
    audio = new Audio('sounds/win2.mp3')
    audio.play()
  } else {
    document.querySelector('h1').innerHTML = 'Draw! '
    audio = new Audio('sounds/draw.mp3')
    audio.play()
  }
}
