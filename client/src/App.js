import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import {Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './history';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Router history={history} >
          <div className="App">
             <Main/>
          </div>
        </Router>
      </Provider>
    )
  }
}


export default App;

