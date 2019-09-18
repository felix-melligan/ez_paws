import React, { Component } from 'react';
import {
  getDataFromDb
} from './database/DatabaseConnection';

class App extends Component {

  state: any = {
    data: [],
  };

  async componentDidMount() {
    const res = await getDataFromDb();
    this.setState({data: res});
    console.log(this.state.data);
  }

  render() {
    return (
      <div className='App'>
        <h1>
          EZ Paws
        </h1>
        <p>

        </p>
      </div>
    );
  }
}

export default App;
