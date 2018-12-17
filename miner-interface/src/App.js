import React, { Component } from 'react';
import MainPageView from './app/mainpageview';
import LoginPageView from './app/loginpageview';

import 'antd/dist/antd.css';
import './theme/layout.css';
import './theme/style.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
    window.addEventListener("login", (e) => this.setLogin(e));
  }

  setLogin(e){
    console.log(">>>>>", e)
    if(e.detail){
      sessionStorage.setItem("login", e);
    }else{
      sessionStorage.removeItem("login");
    }
    this.setState({
      isLogin:e
    });
  }
  
  render() {
    let isLogin = sessionStorage.getItem("login");
    if (isLogin == null) {
      return (
        <div className="App">
          <LoginPageView />
        </div>
      )
    }
    return (
      <div className="App">
        <MainPageView />
      </div>
    );
  }
}

export default App;
