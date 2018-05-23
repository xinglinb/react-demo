import React, { Component } from 'react';
import logo from './../../assets/logo.svg';
import './App.less';
import PureRenderMixin from 'react-addons-pure-render-mixin'

class App extends Component {
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      now: Date.now()
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>{this.state.now}</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
