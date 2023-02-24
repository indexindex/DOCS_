// TODO: KEY

/*
   * "React" uses a specific parameter called "key" for each higher-order
   * "JSX" elements (HTML parent). It's purpose is very useful and it tells
   * "React" which element needs to be updated if it changes state.
   * "key" should always be unique value, that points to specific element.
   * This way we don't need to rerender all elements, but only the one with
   * unique "key" value.
*/

import { Component } from 'react';

class App extends Component {
    constructor() {
      super();
  
      this.state = {
        people: [ { id: '04121997', name: 'Andri' }, { id: '21081999', name: 'Maria' } ]
      };
    }
  
    render() {
      return (
        <div className="App">
          {
            this.state.monsters.map((monster) => {
              // * key has been used to give unique value to <div> element
              return <div key={ people.id }><h1>{ people.name }</h1></div>;
            })
          }
        </div>
      );
    }
}