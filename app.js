


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
  },
  getGuess: function(){
    let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}!`)
    guess = parseInt(guess)
    console.log(guess)
    
    let valid = 
    do {
      
      //do this while guess is invalid
      if(guess >= this.biggestNum || guess <= this.smallestNum){
        
        console.log('error')
      }
    } while ()
  },
  render: function(){
    // code to render (you'll get to this later in the lab)
  }
}
