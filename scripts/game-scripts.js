// Game Classes

// Master Game Class
class Game {

    constructor(cards){
        this.cards = cards;
        this.numOfCards = cards.length;
        this.winningNumberOfMatches = cards.length/2;
        this.elCards = $('.card');
        this.elCardImgContainer = $('.card-image');
        this.body = $('body');
        this.preventClicks = false;
        this.clickCounter = 0;
        this.turnCounter = 0;
        this.matchCounter = 0;
        this.revealedCards = [];
    }

    init(){

        this.cards = this._randomize(this.cards);

        // Variable to store the context of this
        const that = this;

        // Loop through all the cards
        // and insert a card image inside 
        // each card
        this.elCardImgContainer.each(function(index){
            // Create a new HTML image
            const img = $('<img>')
                            .attr({
                                src: that.cards[index].src,
                                alt: that.cards[index].alt,
                            });
            // We add a card number to the card element
            $(this).parent().data('number', that.cards[index].number);
            // Insert the image to the HTML document
            $(this).append(img);
        
        });
        
    }

    clickCard(el){

        // Fail fast...
        // - Kills the function if the user click is invalid...
        // - User clicks are invalid if:
        //      - The preventClick property is true...
        //          - Set and reset in the isMatched() function
        //      - The clicked on card is already open 
        if(this.preventClicks === true || el.hasClass('open')){
            return;
        }

        // If we make it this far...
        // the door is closed...and
        // the click is valid...

        // Add card to the revealedCards
        // array...
        this.revealedCards.push(el);        
        
        // Add open class to the card
        el.addClass('open');

        // Play the door sound effect
        //lowLag.play('door');
        
        // If this is the 2nd valid click
        // by the user, do the following:
        //     - Update the turn counter
        //     - Reset the click counter
        //     - Run the isMatched() function
        //     - Kill this function via a "return"
        if(this.clickCounter === 1){ 
            this.turnCounter++;
            this.clickCounter = 0;
            this.isMatched(this.revealedCards[0], this.revealedCards[1]);
            return;           
        }

        // Add one to the clickCounter
        this.clickCounter++;
       
    }

    isMatched(el1, el2){

        // Clear out the revealed cards array
        this.revealedCards = [];

        // Test if cards do not match
        if(el1.data('number') !== el2.data('number')){
            // Cards are not a match

            // Set the preventClicks property to 
            // true...This is used to prevent
            // opening more than two doors while
            // the setTimeout is running
            this.preventClicks = true;       
            
            // Play a randomly selected no-match message
            //lowLag.play(`no-match-0${this._genRanNum(1, this.sFXnoMatchLength)}`);
            
            // Create a delay before closing the door...
            // We do this to give the user a bit of time
            // to see the cards before they are hidden
            // again...
            setTimeout(() => {
                //lowLag.play('door');
                // Remove the open class from
                // the opened cards
                //lowLag.play(`no-match-0${this._genRanNum(1, this.sFXnoMatchLength)}`);           
                el1.removeClass('open');
                el2.removeClass('open');
                // Reset the preventClicks property
                // to false...to allow new clicks
                // to be valid...
                this.preventClicks = false;
            }, 700);
            return;
        }

        // Cards are a match...

        // Add one to the match counter
        this.matchCounter++;

        // Add a matched class to the two revealed cards
        el1.addClass('matched');
        el2.addClass('matched');

        // Test if the user has matched all the cards...
        // If they have...run the endGame() function
        if(this.matchCounter == this.winningNumberOfMatches){
            this.endGame();
            return;
        }
        
    }

    endGame(){

        window.location.href = "/win-screen.html";
        
    }

    // Utility Functions

    // Randomize an array
    _randomize(arr){
        let j, x, i;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        return arr;
    }

    // Generate a random number between
    // two numbers...from a stackoverflow
    // question and answer:
    // https://stackoverflow.com/a/7228322
    _genRanNum(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    // Returns a random item from a passed
    // in array...does not alter the original
    // array...
    _getRandomItemFromArray(arr){
        return Math.floor(Math.random * arr.length);
    }


}

// Instance of the game class
const game = new Game(cards);

game.init();

// Game Event Listeners
game.elCards.click(function(){
    game.clickCard( $(this) );
});
