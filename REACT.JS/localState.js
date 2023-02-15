// TODO: LOCAL STATE

/*
   * Information that is self-contained only for a given component.
   * To access and generate state, we make a constructor method with
   * "super". Constructor method runs as soon as our class is initiated.
   * "this.state" points to current class.
*/

import { Component } from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = { name: 'Developer' };
    }

    render() {
        return (
            <h1>Hello {this.state.name}!</h1>
        );
    }
}



// TODO: UPDATING LOCAL STATE

/*
   * State uses reference mutation as a way to tell if it was changed,
   * for example, just updating a value will not change the reference
   * of the object itself and not trigger "React" to rerender.
   * Instead we can use "setState" to redeclare "state" object.
   * If the new object contains any previously set keys, then their value
   * will be updated and "React" rerenders.
   * "setState" changes whole reference by reassigning new value, new value
   * passed must preserve same schema to not break initial logic.
   * "setState" is asynchronous.
*/

class App extends Component {
    render() {
        return (
            <button onClick={() => {
                this.setState({ name: 'Community' })
            }}></button>
        );
    }
}



// TODO: UPDATING LOCAL STATE W FUNCTIONS

/*
   * Recommended way to use "setState" is with functions.
   * First function is updater function that will do shallow merge
   * to the state. Second function is a callback function and it is optional.
   * Callback function runs when first function is finished.
*/

class App extends Component {
    render() {
        return (
            <button onClick={() => {
                this.setState(
                    () => {
                        return {
                            name: 'Community'
                        }
                    },
                    () => {
                        console.log('Updated state', this.state)
                    }
                )
            }}></button>
        );
    }
}