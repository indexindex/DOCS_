// * SIMPLE REMINDER --- --- --->
// ? keyword THIS points to something
something.callFunction();
// ? keyword THIS points to window
callFunction();

// ! better not use arrow functions as object methods, their THIS will point to window
// * SIMPLE REMINDER <--- --- ---

// --- --- --->
// TODO: THIS

// ? this is an object which refers to current execution scope

// * normally THIS refers to window
function sayHi() {
    console.log('hi');
    console.log(this);
}
sayHi();

// --- --- --->
// TODO: USING THIS IN METHODS

// * THIS will point to object itself
const person = {
    first: 'Andri',
    last: 'Suvorov',
    nickName: 'zippelgazz',
    fullName() {
        console.log(this);
        return `${this.first} ${this.last} AKA ${this.nickName}`;
    },
    printBio() {
        fullName() // ! would not work, will print "is not defined"
        this.fullName(); // * we need THIS to reference the current object and then point to function
    }
}
person.fullName();

// --- --- --->
// TODO: THIS INVOCATION CONTEXT

const person = {
    first: 'Andri',
    last: 'Suvorov',
    nickName: 'zippelgazz',
    fullName() {
        console.log(this);
        return `${this.first} ${this.last} AKA ${this.nickName}`;
    },
    printBio() {
        fullName() // ! would not work, will print "is not defined"
        this.fullName(); // * we need THIS to reference the current object and then point to function
    },
    laugh: () => {
        // ! arrow function THIS will point to window scope
        console.log(this);
        console.log(`${this.nickName} says Hello!`)
    }
}

// * pointing this way will point to window scope
const printBio = person.printBio;

// --- --- --->
// TODO: ANNOYOMATIC DEMO

const annoyer = {
    phrases: ['do this do that', 'help me', 'clean it', 'listen to this', 'download this'],
    pickPhrase() {
        // * destructuring (phrases = this.phrases)
        const {phrases} = this;
        const index = Math.floor(Math.random() * phrases.length);
        return phrases[index]
    },
    start() {
        // ! if we use normal function declaration with setInterval then THIS will refer to window scope, because setInterval is window method
        // ! arrow function don't get their own THIS and thus will reference current object
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000)
    },
    stop() {
        clearInterval(this.timerId);
        console.log("it's over!");
    }
}

// --- --- --->
// TODO: DECK OF CARDS OOP

const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
        // * destructuring (suits = this.suits) etc
        const {suits, values, deck} = this;
        // * array of values
        for (let value of values.split(',')) {
            // * array of suits
            for (let suit of suits) {
                // * "value: value" can be limited to just value
                deck.push({value, suit})
            }
        }
        return deck;
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawCards.push(card);
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
        // * destructuring
        const {deck} = this;
        // * loop over array backwards
        for (let i = deck.length - 1; i > 0; i--) {
            // * pick random index before current element
            let j = Math.floor(Math.random() * (i + 1));
            // * swap
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}

// * controls
myDeck.initializeDeck();
myDeck.shuffle();
const hand1 = myDeck.drawMultiple(2);
const hand2 = myDeck.drawMultiple(2);
const hand3 = myDeck.drawMultiple(5);
