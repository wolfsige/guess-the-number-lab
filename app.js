


let prevGuess = []

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,

  play: function() {
    if (getGuess = true){

      guess.push(prevGuess)

    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    } else {
      
    }
  }
}

  let getGuess = function(guess){
      result = window.prompt(`Enter a guess between ${smallestNum} and ${biggestNum}`)

    do {
      if(guess > secretNum){
        prevGuess.push(guess)
        return guess + ' was too high. Here is what youve guessed so far ' + prevGuess
        
      } else {
        prevGuess.push(guess)
        return guess + ' was too low. Here is what youve guessed so far ' + prevGuess
      }
      
       
    } while (guess !== secretNum);
  }

  