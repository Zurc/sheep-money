import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

export default function NavBar(props) {

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Sheep Money
      </Link>
      {props.authenticated === false
        ? <button className="btn btn-dark" onClick={props.login}>Sign In</button>
        : (
          <Fragment>
            <span>Hello Dad!</span>
            <button className="btn btn-dark" onClick={props.logout}>Sign Out</button>
          </Fragment>
        )
      }
    </nav>
    </div>
  )
}