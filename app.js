


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)
    while (this.getGuess() !== this.secretNum) {
      
      if (this.getGuess() === NaN){
        prompt (`Please guess a NUMBER!`)
      } else {
        this.getGuess()
      }
        this.render()
      
      
      
    }
    
  },
  getGuess: function(){
    let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}!`)
    guess = parseInt(guess)
    console.log(guess)
    
    let valid = null
    do {
      if(guess >= this.biggestNum || guess <= this.smallestNum){
        
      } 
    } while (valid === false)
    
    this.prevGuesses.push(guess)
    console.log(`Here are your previous guesses: ${game.prevGuesses}`)
    

  },
  render: function(){
    let daGuess = this.getGuess()
    if ( daGuess === this.secretNum){
      console.log(`Congrats! You guessed the number in ${this.prevGuesses.length}!`)
    } else if (daGuess > this.secretNum){
      console.log(`Your guess is too high! Previous guesses ${this.prevGuesses}`)
    } else (daGuess < this.secretNum) 
      console.log(`Your guess is too low! Previous guesses ${this.prevGuesses}`)
    
  }
}

game.play()
