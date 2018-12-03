import React from 'react';
import NavBar from './NavBar';
import Balances from './Balances';

class App extends React.Component {
  state = {
    token: '',
    balances: '',
    authenticated: false
  }

  _baseURL = 'https://api.roostermoney.com/v1';

  updateToken() {
    this.setState({
      token: JSON.parse(localStorage.getItem('token')).token,
      authenticated: true
    })
  }

  login = () => {
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "accessKey": "cruz",
        "accessPassword": "4b67a94a33c154765273"
      })
    }
    fetch(`${this._baseURL}/auth/`, requestOptions)
      .then(res => res.json())
      .then((data) => {
        localStorage.setItem('token', JSON.stringify(data))
      })
      .then(() => this.updateToken())
      .then(() => this.getBalances())
  }

  getBalances = () => {
    let token =  JSON.parse(localStorage.getItem('token')).token;
    const requestOptions = {
      headers: {
        "Content-Type": "application/json", 
        "x-access-token": token},
    }
    fetch(`${this._baseURL}/balance/`, requestOptions)
      .then(res => res.json())
      .then((data) => {
        this.setState({balances: data})
      })
  }

  logout = () => {
    localStorage.removeItem('token');
    this.setState({
      token: '',
      balances: '',
      authenticated: false
    })
  }

  render() {
    return (
      <div>
        
          <NavBar 
            login={this.login} 
            logout={this.logout} 
            authenticated={this.state.authenticated}/>
            
          { this.state.balances.length > 0
            ? <Balances balances={this.state.balances}/>
            : null
          }
      </div>
    );
  }
}

export default App;