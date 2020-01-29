import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import HeaderPage from './components/headerPage';
import BodyPage from './store/containers/bodyPage';
import FooterPage from './components/footerPage';

class App extends Component{
  render(){
    return (
      <div className="App bg-light min-vh-100">
        <HeaderPage/>
        <Provider store={ store }>
        <BodyPage/>  
        </Provider>
        <FooterPage/>
      </div>
    );
  }
};

export default App;
