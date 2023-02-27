// TODO: COMPONENT

/*
   * Declaring a component is a good way to generalise
   * functional parts of our app. 
   * Components rerender in two cases: when "state" is called or
   * when "props" value changes.
*/

import { Component } from 'react';

class CustomComponent extends Component {
    render() {
        return <h1>This is a custom component</h1>
    }
}

export default CustomComponent;



// TODO: USING COMPONENT

/*
   * Once we have made a component and imported it to our
   * desired file, we now can declare it as "JSX tag".
*/

class App extends Component {
    // * ...

    render() {
        return (
            <CustomComponent/>
        )
    }
}



// TODO: PASSING PROPS

/*
   * Properties that we can pass for our custom component
   * can be anything.
   * That property can then later be accessed inside component
   * with "this.props.anything".
*/

<CustomComponent anything={'text'} />