import React, { Component } from 'react';
import User from './components/User';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://api.github.com/users/sean-birmingham'
      )
      .then((res) => {
        console.log('user', res.data);
        this.setState({ user: res.data });
      })
      .catch((err) => console.log('error ', err));
  }

  render() {
    return (
      <div className='App'>
        <h1>Github User Card</h1>
        <User user={this.state.user} />
      </div>
    );
  }
}

export default App;
