import React, { Component } from 'react'
import {authService} from '../_services/auth.service';

const Balance = props => (
  <ul>
    {props.balances.map((b, i) =>
      <li key={i}>
        <p>{b.childUsername}</p>
        <p>{b.totalBalance}</p>
      </li>
    )}
  </ul>
)

export default class Balances extends Component {
  state = {
    balances: []
  }

  componentDidMount() {
    if(authService.getBalances() !== null) {
      console.log('mountin!');
      return authService.getBalances().then((items)=>{
        items.map((item) => (
          this.setState(prevState => ({
            balances: [...prevState.balances, item]
          }))
        ))
        console.log(this.state.balances);
      })
    }
  }

  render() {
    return (
      <div>
        { this.state.balances.length > 0 
            ? <Balance balances={this.state.balances}/>
            : <p>loading balances...</p>
        
        }
      </div>
    )
  }
}
