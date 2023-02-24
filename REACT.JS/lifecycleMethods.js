// TODO: KEY

/*
   * componentDidMount runs again only after unmount.
   * Usually used with API calls.
*/

import { Component } from 'react';

// * componentDidMount

// * runs once when "React" renders component to the page DOM
class App extends Component {
    constructor() {
      super();
  
      this.state = { people: [] };
    }

    componentDidMount() {
        fetch('https://someurl.com/people')
        .then(response => response.json())
        .then(people => {
            this.setState(() => {
                return { people: people };
            })
        })
    }
  
    render() {
      return (
        <div className="App">
          {
            this.state.monsters.map(people => {
              // * key has been used to give unique value to <div> element
              return <div key={ people.id }><h1>{ people.name }</h1></div>;
            })
          }
        </div>
      );
    }
}