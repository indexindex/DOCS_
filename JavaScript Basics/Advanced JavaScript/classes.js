// instantiation (making instances or multiple copies of an object)

class Player {
    // parameters is what player will have
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    // any Player that you create will always be able to introduce himself
    // and they also have this name and this type
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Witcher extends Player {
    constructor(name, type) {
        super(name, type) // whenever you extend you have to use super to have access to those types
    }
    play() {
        console.log(`Hi I am ${this.type}`);
    }
}

const witcher1 = new Witcher('Andri', 'Healer');
const witcher2 = new Witcher('Marti', 'Utility unit');

witcher1.play()
// return value = Hi I am Healer

witcher1.introduce()
// return value = Hi I am Andri, I am a Healer

witcher1.play()
// return value = Hi I am Healer

witcher2.introduce()
// return value = Hi I am Marti, I am a Utility unit