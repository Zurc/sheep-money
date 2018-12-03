import React from 'react';
import {Link} from 'react-router-dom';
import {authService} from '../_services/auth.service';


export default function NavBar() {

  const signIn = () => {
    authService.login();
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Rooster Money
      </Link>
      <button className="btn btn-dark" onClick={signIn}>Sign In</button>
    </nav>
    </div>
  )
}
