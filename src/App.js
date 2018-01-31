import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetService from "./TweetService";
import ApiClient from "./ApiClient";
import config from "./config";

class App extends Component {
  state = {
    searchString: "",
    tweets: []
  };

  async componentWillMount() {
    const apiClient = new ApiClient(config);
    this.tweetService = new TweetService(apiClient);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.searchString}</h1>
          <p><input type={"text"} onChange={(event) => this.setState({searchString: event.target.value})} />
            <button onClick={() => this.search()}>Search</button></p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <ul>
          {this.state.tweets.map(tweet => <li>{JSON.encode(tweet)}</li>)}
        </ul>
      </div>
    );
  }

  async search () {
    console.log("searching");
    const tweets = this.tweetService.search(this.state.searchString);

    console.log(tweets);
    this.setState({tweets});
  }
}

export default App;
