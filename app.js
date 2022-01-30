// console.log("here")


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  play: function() {
    // console.log(this.title);
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    // console.log(this.secretNum)
    
    do {
      this.getGuess()
      this.render()
    } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
      
    
      
    
  },
  getGuess: function(){
    let guess;
    
    do {
      
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}!`))

      // console.log(guess)

    } while (guess > this.biggestNum || guess < this.smallestNum || isNaN(guess))
    
    this.prevGuesses.push(guess)
    return `${guess} Here are your previous guesses: ${game.prevGuesses}`
    
    

  },
  render: function(){

    // let daGuess = this.getGuess()
    // console.log(this.getGuess())
    let msg;

    // if (daGuess === this.secretNum){
    //   return `Congrats! You guessed the number in ${this.prevGuesses.length}!`
    // } else if (daGuess > this.secretNum){
    //   return `Your guess is too high! Previous guesses ${this.prevGuesses}`
    // } else (daGuess < this.secretNum) 
    //   return `Your guess is too low! Previous guesses ${this.prevGuesses}`
    
    if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
      msg = `Your guess is too high! Previous guesses ${this.prevGuesses}`
      // console.log(this.prevGuesses[this.prevGuesses.length - 1])
    } 
    else if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum){
      msg = `Your guess is too low! Previous guesses ${this.prevGuesses}`
      // console.log(this.prevGuesses[this.prevGuesses.length - 1])
    } else if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
      msg = `Congrats! You guessed the number in ${this.prevGuesses.length}!`
      // console.log(this.prevGuesses, this.prevGuesses[this.prevGuesses.length - 1])
    } else {
      console.log('yes')
    }
    
    
    alert(msg);

  }
}

game.play()
