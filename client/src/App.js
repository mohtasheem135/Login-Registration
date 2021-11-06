import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp/SignUp';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <button className="btn"><a href="http://localhost:1350/express_backend">Connect to React</a></button>
        </header>
        <p className="App-intro">{this.state.data}</p>
        <SignUp/>
      </div>
    );
  }
}

export default App;