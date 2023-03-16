const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    initializeDeck() {
        const { deck, suits, values } = this;

        for (let value of values) {
            // ? current loop will hold a number from "values" and move to next loop
            // ? for example: "2"
            for (let suit of suits) {
                // ? current loop will attach 4 suits one by one to previous number "value"
                // ? for example: "2 hearts", "2 diamonds", "2 spades", "2 clubs"

                // * destructuring: { value: value, suit: suit }
                deck.push({ value, suit });
            }
        }

        return deck;
    },
    drawCard() {
        const { deck, drawnCards } = this;
        const card = deck.pop();
        
        drawnCards.push(card);

        return card;
    },
    drawMultiple(numCards) {
        const cards = [];

        for (let i = 0; i < numCards; i++) {
            cards.push(this.drawCard());
        }

        return cards;
    },
    shuffle() {
        const { deck } = this;

        // ? loop over deck array backwards
        for (let i = deck.length - 1; i > 0; i--) {
            // ? pick random index before current element
            let random = Math.floor(Math.random() * (i + 1));

            // ? swap
            [deck[i], deck[random]] = [deck[random], deck[i]];
        }
    }
}

myDeck.initializeDeck(); // * myDeck.deck is created
myDeck.shuffle(); // * myDeck.deck is now shuffled
const hand1 = myDeck.drawMultiple(2);
const hand2 = myDeck.drawMultiple(2);
const hand3 = myDeck.drawMultiple(5);