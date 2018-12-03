import React from 'react';
import Balance from './Balance';

export default function Balances(props) {
   return (
      <div className="container">
        <div className="row">
          {
            props.balances.map((balance)=><Balance key={balance.childUsername} balance={balance}/>)
          }
        </div>
      </div>
    )
}