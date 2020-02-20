import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
//import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));

class FetchDemo extends React.Component {
    state = {
      posts: []
    }
  
    componentDidMount() {
      axios.get(`https://red-smoke-0cb7ea84.staticsitescanary.net/.api/${this.props.subreddit}`)
        .then(res => {
          console.log(res.data)
        });
    }
  
    render() {
      return (
        <div>
          <h1>trying something</h1>
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
