import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
//import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));

class FetchDemo extends React.Component {
    state = {
      names: []
    }
  
    componentDidMount() {
      axios.get(`/.api/${this.props.subreddit}`)
        .then(res => {
          console.log(res.data[0])
          var names = res.data;
          this.setState({names});
        });
    }
  
    render() {
      return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Look at this really cool spinny thing we have here!!!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Everything is fine.
          </a>
          <a 
            className="App-link"
            href="https://cerulean-iguana-839.azurestaticwebsites.net/.auth/login/aad"
          >
          Log in with Azure AD
          </a>
          <p>{this.state.names}</p>
        </header>
      </div>
      );
    }
  }
  
  ReactDOM.render(
    <FetchDemo subreddit="getList"/>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
