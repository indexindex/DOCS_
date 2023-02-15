// TODO: CLASSES

/*
   * The more traditional way of rendering components in "React", is
   * using classes.
   * We need to import "Component" class from "React".
   * Make a class "App" and extend functionality of "Component" class.
   * Now we can call render method of our "Component" class and
   * render whatever we want to return.
*/

import { Component } from 'react';

class App extends Component {
    render() {
        return (
            <h1>Hello Wolrd!</h1>
        );
    }
}