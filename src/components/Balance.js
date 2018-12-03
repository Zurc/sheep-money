import React, {Fragment} from 'react';

class Balance extends React.Component {
  state = {
    isHidden: false
  }
 
  toggleHidden = () => {
    this.setState(prevState => {
      return {
        isHidden: !prevState.isHidden
      }
    })
  }
  
  render(props) {
    const load = this.state.isHidden;
    const {childUsername, totalBalance, savingsBalance, walletBalance, charityBalance, goalBalance} = this.props.balance
    return (
      <Fragment>
        {
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="card text-white bg-success mb-3 text-center">
              <div className="card-body">
                <div className="child-name">{childUsername.substring(-1,6)}</div>
                <h4 className="card-title">Total balance: {totalBalance}</h4>
                <button type="button" className="btn btn-info" onClick={this.toggleHidden.bind(this)}>{
                  load ? 'Hide details' : 'Show details'
                  }</button>
                <br /><br/>
                { load
                  ? (
                    <div>
                      <p className="card-text">Spend: {walletBalance}</p>
                      <p className="card-text">Savings: {savingsBalance}</p>
                      <p className="card-text">Goals: {goalBalance}</p>
                      <p className="card-text">Charity: {charityBalance}</p>
                    </div>
                  )
                  : null 
                }
              </div>
            </div>
          </div>
        }
      </Fragment>
    )
  }
    
} 

export default Balance;