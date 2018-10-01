import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';
import Items from './Items';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyB9Y4AGUgRdNSGNzbJp6T3Pe7li5d75Z9E",
      authDomain: "hello-a8635.firebaseapp.com",
      databaseURL: "https://hello-a8635.firebaseio.com",
      projectId: "hello-a8635",
      storageBucket: "hello-a8635.appspot.com",
      messagingSenderId: "329023525"
    };
    firebase.initializeApp(config);
    const database = firebase.database();
    database.ref('publicItemsData').on('value', (snapshot) => {
      console.log('publicItemsData changed', snapshot.val());
      this.setState({items: snapshot.val()});
    });
  }

  render() {
    return (
      <div className="App">
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
