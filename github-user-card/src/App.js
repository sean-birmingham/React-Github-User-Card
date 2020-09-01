import React, { Component } from 'react';
import User from './components/User';
import Followers from './components/Followers';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    user: {},
    followers: [],
    inputValue: ''
  };

  componentDidMount() {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://api.github.com/users/sean-birmingham'
      )
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => console.log('error ', err));

    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://api.github.com/users/sean-birmingham/followers'
      )
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => console.log('error ', err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      this.fetchUsers = (e) => {
        e.preventDefault();
        axios
          .get(
            `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${this.state.inputValue}`
          )
          .then((res) => {
            this.setState({ user: res.data });
          })
          .catch((err) => console.log('error ', err));

        axios
          .get(
            `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${this.state.inputValue}/followers`
          )
          .then((res) => {
            this.setState({ followers: res.data });
          });
      };
    }
  }

  handleChanges = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div className='App'>
        <h1>Github User Card</h1>
        <form onSubmit={this.fetchUsers}>
          <input
            type='text'
            value={this.state.inputValue}
            onChange={this.handleChanges}
          />
          <button type='submit'>Get user</button>
        </form>
        <User user={this.state.user} />
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
